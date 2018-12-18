var t;
function foo() {
  if (t) return t;
  t = new Date();
  return t;
}
console.log(foo());
setTimeout(() => {
  console.log(foo());
},2000);
