[source](https://reacttraining.com/react-router/web/example/basic)
[source](https://segmentfault.com/a/1190000014294604)

1. match.url 

- Redirects 
  withRouter

- Custom Link
  返回 Route  
  需要输出所有链接, 
  Children  render whether the path matches the location or not.
  children prop 不匹配时match 为null


- Preventing Transitions
  在有表单前提示
  Router render 直接输出


- Not Match
  最后用一个没有Path 的来匹配所有 404
  函数式component 拿到了 location.pathname

- Recursive Paths
  1. match 传了默认id:0  
  2. 之后的每次都可以拿到params部分

- Animated Transition
  1. styles js 
  2. render  显示组件
  3. redirect 跳转地址

- Ambiguous Matches 
  不匹配多个， 