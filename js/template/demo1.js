const _ = require('lodash');

const tpl = "hello: <%= name %>";
const compiled = _.template(tpl);
console.log(compiled({name: 'Kevin'}));
