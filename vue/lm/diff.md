# 数据状态更新时的差异diff 及patch(补片) 机制

## 数据更新视图
  对model 进行操作， 触发Dep中的Watcher对象， 调用对应的update来修改视图。将产生的VNode节点与老VNode进行一个patch的过程， 得出差异， 更新到视图上。 

  ### 跨平台
  Virtual DOM 具有了跨平台的能力， 
  nodeOps 适配层

patch 的核心diff算法， 比对两棵树的差异， 
diff算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式，时间复杂度为O(n), 高效