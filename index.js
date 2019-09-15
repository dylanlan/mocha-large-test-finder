'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const isTestFile = (fileName) => {
    return fileName && fileName.endsWith('.test.js') || fileName.endsWith('.spec.js');
};

const isDirectory = (path) => {
    return fs.existsSync(path) && fs.lstatSync(path).isDirectory() && !path.startsWith('.');
}

const getTestFiles = (directory) => {
    const files = fs.readdirSync(directory);
    let testFiles = files.filter(f => isTestFile(f)).map(f => path.join(directory, f));
    const directories = files.filter(f => isDirectory(f));
    directories.forEach(dir => {
        const subFiles = getTestFiles(dir);
        testFiles = testFiles.concat(subFiles);
    });

    return testFiles;
};

const isTestLine = (line) => {
    const regex = /^\s*it\(/;
    return regex.test(line);
};

const isTestBlock = (line) => {
    const regex = /^\s*(it|describe|beforeEach|afterEach)\(/;
    return regex.test(line);
}

const lengths = {};
const findLargeTests = (testFile) => {
    const testText = fs.readFileSync(testFile).toString();
    if (!testText) {
        return;
    }

    const lines = testText.split('\n');
    if (!lines || !lines.length) {
        return;
    }

    const numLines = lines.length;
    let testLength = 0;
    let currentTest = '';
    let fileLine;
    for (let i = 0; i < numLines; i++) {
        const line = lines[i];
        const lineNumber = i + 1;
        fileLine = `${line} - ${testFile}:${lineNumber}`.trim();
        const isTest = isTestLine(line);
        const isBlock = isTestBlock(line);

        if (!isBlock) {
            if (currentTest) {
                // if found regular code, and we're in a test, increment line count
                testLength++;
            }
        } else {
            if (currentTest) {
                // if we found a block and we're in a test, let's end the line count
                lengths[currentTest] = testLength;
                testLength = 0;
                currentTest = '';
            }
            
            if (isTest) {
                // found a new test block
                currentTest = fileLine;
            }
        }
    }

    if (currentTest) {
        // if we reached end of file, end line count for any ongoing test
        lengths[currentTest] = testLength;
        testLength = 0;
        currentTest = '';
    }
};

const allTestFiles = getTestFiles('.');

allTestFiles.forEach(file => {
    findLargeTests(file);
});

const sorted = _.fromPairs(_.sortBy(_.toPairs(lengths), 1).reverse());

console.log(sorted);
