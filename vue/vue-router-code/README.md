# vue-router

[source](https://github.com/vuejs/vue-router/blob/dev/examples/index.html)

[source](https://www.cnblogs.com/ccyinghua/p/7872694.html)

# hash or history

# named routes
<route-link :to="{name: '', params:}"> 传name 加参数

# named views
一个路由可以匹配多个组件， components,
key 为名字

# router-match
用正则来匹配 \\d+   ?

# active-link
eact 严格模式
/
/article

# redirect
/not-found  { path: '*', redirect: '/' }
caseSensitive
pathToRegexpOptions


# data-fetching
- 路由匹配  /post/:id
- api
  定义回调函数的规则
  cb(null, data)
- watch 路由的变化，
  组件已渲染

# 用auth 把后台和router窜起来


