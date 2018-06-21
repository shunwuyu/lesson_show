let Promise = require('./promise.js')
let promise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('hello')
    },2000)
})
promise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})