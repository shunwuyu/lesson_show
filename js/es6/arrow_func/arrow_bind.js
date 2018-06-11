// 不能用call  来改变this
var value = 1;
var result = (() => this.value).bind({value: 2})();
console.log(result);