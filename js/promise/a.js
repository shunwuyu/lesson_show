let Promise = require('./index.js');


let promise = new Promise((resolve, reject) => {
    resolve('hello world');
});
// 为何不能放异步呢？ 因为下面的会马上执行
promise.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
})