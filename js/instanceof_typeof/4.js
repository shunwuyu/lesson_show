let person = function() {}
let programmer = function() {}
programmer.prototype = new person()
let nicole = new programmer();
console.log(nicole instanceof person);
console.log(nicole instanceof programmer);