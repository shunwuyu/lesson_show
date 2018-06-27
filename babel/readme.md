[source](https://juejin.im/post/5a79adeef265da4e93116430)
-  let => var  1.babelrc
- modules: false   class   转译   
写法注意  加了为false 就不编译   commonjs
-  transform-run-time   对es6的语法进行转换，而不会对新api进行转换

- 保持版本


下一代JavaScript 语法的编译器
用最新的语法糖编写，不但能减少代码量， 而且async,await 解决了回调的编写机制， 减少了代码维护成本。

presets 

1. 语法转义器， 主要对javascript 最新的语法糖进行编译， 并不负责转译javascript 新增的api和全局对象， 

2. 补丁转义器。 主要负责javascript 新增的api和全局对象， babel-plugin-transform-runtime Object.assign

3. jsx和flow 插件， babel-preset-react

不同阶段的转译器之间是包含关系，   


