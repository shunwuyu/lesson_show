let Promise = require('./index.js');
let promise = new Promise((resolve, reject) => {
    resolve('hello world');
});

promise.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
})