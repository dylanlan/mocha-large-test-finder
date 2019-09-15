'use strict';

const fs = require('fs');

const isTestFile = (fileName) => {
    return fileName && fileName.endsWith('.test.js') || fileName.endsWith('.spec.js');
};

const isDirectory = (path) => {
    return fs.existsSync(path) && fs.lstatSync(path).isDirectory() && !path.startsWith('.');
}

const getTestFiles = (directory) => {
    const files = fs.readdirSync(directory);
    let testFiles = files.filter(f => isTestFile(f));
    const directories = files.filter(f => isDirectory(f));
    directories.forEach(dir => {
        const subFiles = getTestFiles(dir);
        testFiles = testFiles.concat(subFiles);
    });

    return testFiles;
};

const allTestFiles = getTestFiles('.');

console.log(allTestFiles);


// TODO:
// 1. find all test files
// 2. for each test file, split into lines
// start counting lines once a 'it()' is found, until next 'it(), describe(), beforeEach(), afterEach(), EOF, etc)
// keep track of file / describe / it names?
// sort by most lines? allow argument to find tests over a certain number of lines?