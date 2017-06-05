// require all modules ending in "_test" from the
// current directory and all subdirectories
const testsContext = require.context('.', true, /.test$/); // eslint-disable-line
testsContext.keys().forEach(testsContext);