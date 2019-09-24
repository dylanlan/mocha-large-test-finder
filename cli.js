#!/usr/bin/env node

'use strict';
const argv = require('minimist')(process.argv.slice(2));
const testFinder = require('./testFinder');

const dir = argv.dir || '.';
const lines = argv.lines || 20;
const numTests = argv.top || 50;
const help = argv.help;

if (help) {
    console.log(`usage: large-test-finder [...options]`);
    console.log(`\noptions:`);
    console.log('--dir: search tests in this directory')
    console.log('--lines: find tests with at least this many lines');
    console.log('--top: only output this many tests');
    console.log('\nexample: large-test-finder --dir=/some/test/directory --lines=20 --top=5')
    process.exit(0);
}

const { largeTests, numTotalTests } = testFinder.getLargeTests(dir, lines, numTests);

console.log(`Top ${numTests} tests with approx number of lines greater than ${lines} in directory (${dir}):`);
largeTests.forEach(test => {
    console.log(`${test[0]}, line count: ${test[1]}`);
});

console.log(`Total number of large tests: ${numTotalTests}`);
