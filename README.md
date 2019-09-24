Mocha Large Test Finder
==================

Wanting to refactor some tests to be smaller or simpler? But don't know where to start?

If so, this package might be for you!

This is a simple package to find large tests in a code repo.

It searches for .test.js or .spec.js files, and looks at the number of lines in the it() blocks.

It then outputs the tests above a certain line count threshold.

Usage:
```
npm install -g mocha-large-test-finder
large-test-finder --dir=/some/test/directory
```

Options:
```
--dir: look for tests in this directory (default .)
--lines: find tests that are above this number of lines (default 20)
--top: output the top N tests sorted by number of lines (default 50)
```

Examples:
```
# Find tests greater than 10 lines
large-test-finder --lines=10

# Find 5 largest tests greater than 15 lines, in /some/test/directory, 
large-test-finder --top=5 --lines=15 --dir=/some/test/directory
```

Note that line counts will only be approximate, not exact, since it only uses a heuristic for counting lines rather than parsing.

TODO:
* add some tests
* test on various repos
