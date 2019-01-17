//https://juejin.im/post/59658504f265da6c415f3324
// concat 克隆的并不彻底
// 复制引用的拷贝方式称之为浅拷贝, 深拷贝是指完全的拷贝一个对象， 
// 即使嵌套了对象，两者也相互分离。  
var arr = [{old: 'old'}, ['old']];
var new_arr = arr.concat();

arr[0].old = 'new';
arr[1][0] = 'new'
console.log(arr);
console.log(new_arr);
