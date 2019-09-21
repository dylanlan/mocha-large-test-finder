Mocha Large Test Finder
==================

Wanting to refactor some tests to be smaller or simpler? But don't know where to start?

If so, this package might be for you!

This is a simple package to find large tests in a code repo.

It searches for .test.js or .spec.js files, and looks at the number of lines in the it() blocks.

It then outputs the tests above a certain line count threshold.

Options:
```
--lines: find tests that are above this number of lines (default 20)
--dir: look for tests in this directory (default .)
--top: output the top N tests sorted by number of lines (default 50)
```

Example:
```
# Find tests greater than 10 lines
node index.js --lines=10

# Find 5 largest tests greater than 15 lines, in /some/test/directory, 
npm run start -- --top=5 --lines=15 --dir=/some/test/directory
```

Note that line counts will only be approximate, not exact, since it only uses a heuristic rather than parsing.

TODO:
* move logic to separate file
* add some tests
* test on various repos
