使用分组件引入法写， 不讲vue-router
- login 
  rules 后一步写
  rules 正则管理员或editor 让同学们自己写
  password 密码超过6位

- @keyup.enter.native事件
监听组件根元素的原生事件 看下文档

- .sync 作用 看vue-devtool
  el-dailog  .visible.sync=''  要讲一下

- 样式这块 注意scoped ------要讲一下
  .login-container .login-form[data-v-7589b93f]

- validate 由refs 找到， 用法

- el-checkbox-group 值被选中， 数组 label

- el-table :key 如果要重绘， 值发生改变
输出内容的思想， 列， 　label 是表头
group 的值发生改变， watch 一下, 重设一下formThead

- table v-loading  加载状态  key
  先写table 出来一个空的表格
  created()  早一些 请求数据
  请求对象做成一个json, 方便管理


## 头像上传控件
- 关闭按钮样式及mvvm
  before after  hover   emit close

- border 样式技巧 

- FormData 
  发送文件

- 文件上传事件
  点击  $ref  click e.target !== this.$refs.fileinput