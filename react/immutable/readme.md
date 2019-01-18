[source](https://juejin.im/post/59658504f265da6c415f3324)

[source](https://juejin.im/post/5b9b30a35188255c6418e67c)

React+Redux+Immutable.js 标配 = React 前端

mmutable.js 采用了持久化数据结构和结构共享， 任何添加， 修改， 删除等操作都会生成一个新的对象， 并且通过结构共享 等方式大幅提高性能。

持久化数据结构， 每次修改后会得到一个新的版本， 且旧版本可以完好保留
对于有修改的部份， 把相信路径上的所有节点重新生成， 对于本次操作没有修改的部分， 可以把相应的节点拷贝过去， 结构共享。

map 扁平的树

使用 concat 和 slice 是一种浅拷贝

concat、slice、JSON.stringify 都算是技巧类，可以根据实际项目情况选择使用，接下来我们思考下如何实现一个对象或者数组的浅拷贝


