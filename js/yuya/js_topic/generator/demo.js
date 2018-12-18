var fetch = require('node-fetch');
function* gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
// console.log(g);
var result = g.next();
console.log(result);
result.value.then(function(data) {
  return data.json();
}).then(function(data) {
  console.log(g.next(data));
})