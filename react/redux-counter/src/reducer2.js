const reducer = require('./reducers');

const actions = [
  { type: 'INCREMENT', payload: 0 },
  { type: 'INCREMENT', payload: 1 },
  { type: 'INCREMENT', payload: 2 }
];

const total = actions.reduce(reducer, 0);
console.log(total);