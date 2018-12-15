[source](https://juejin.im/book/5b73a131f265da28065fb1cd/section/5b73a1316fb9a009ce489c30)

# 多端统一开发背景与趋势介绍
大前端 
终端碎片化 Apple Watch手表 智能TV VR眼镜
Serverless 新的架构代替传统架构

抹平开发差异, 使用熟悉的技术栈完成多端开发
Taro  泰罗奥特曼
Nerv  作为基础框架
CLI  Athena 
仓库包管理 Lerna

- nvm 不同版本的Node之间自由切换， 全局安装时不也用加sudo 了。 

- 生命周期
  constructor state 的初始化， 事件的绑定等
  componentWillMount  挂载操作前， 执行的函数， 一般紧跟着constructor 
  componentDidMount  异步拉取
  componentWillReceiveProps  新的props时会执行的函数
  componentWillUpdate   进行更新之前， 会执行的函数
  componentDidUpdate  更新完成时， 会执行的函数， prevProps, prevState
  componentWillUnmount  回收工作    定时器
  shouldComponentUpdate 返回false 时， 将不会进行更新， 可用于渲染优化。
