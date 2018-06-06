var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar();

var bindFoo = bar.bind(foo);
bindFoo();