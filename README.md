Mocha Large Test Finder
==================

Wanting to refactor some tests to be smaller or simpler? But don't know where to start?

If so, this package might be for you!

This is a simple package to find large tests in a code repo.

It searches for .test.js or .spec.js files, and looks at the number of lines in the it() blocks.

It then outputs the tests above a certain line count threshold.

The default is 20 lines, you can send a command line argument to change this like so:

```
node index.js --lines=50
OR
npm run start -- --lines=50
```

Note that line counts will only be approximate, not exact, since it only uses a heuristic rather than parsing.

TODO:
* accept directory parameter
* add some tests
* test on various repos
