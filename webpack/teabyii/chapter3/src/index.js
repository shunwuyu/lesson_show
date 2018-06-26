require('./styles/normalize');
require('./styles/index')
const format = require('utils/format');
const log = require('log');
log(format('hello world'));
log(_.map([1,2,3], (item) => item * 2));
log(TWO);
log(CONSTANTS.APP_VERSION);
