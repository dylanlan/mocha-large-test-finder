'use strict';

const fs = require('fs');
const path = require('path');

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
    testBlockRegex.match(line);
}

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
    for (let i = 0; i < numLines; i++) {
        const line = lines[i];
        const lineNumber = i + 1;
        if (isTestLine(line)) {
            console.log(`${testFile}:${lineNumber} - it()`);
        }
    }
};

const allTestFiles = getTestFiles('.');

allTestFiles.forEach(file => {
    findLargeTests(file);
});

// TODO:
// 2. for each test file, split into lines
// start counting lines once a 'it()' is found, until next 'it(), describe(), beforeEach(), afterEach(), EOF, etc)
// keep track of file / describe / it names? or just filename & line number?
// sort by most lines? allow argument to find tests over a certain number of lines?