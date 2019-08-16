- 理论支持
  SPA 单页应用开发， 导航（nav）不动，
  footer也不动， 中间body(main.content) 是切换的， 页面不需要刷新的， 
  传统web开发中， 空白（新的web请求）页(get)
  白一下， 加载一下， 这个体验很糟糕， 
  对应路由， 把相应组件切换出来， 像APP一样

- jquery on 事件api 
$(document).on(event_type, child_nodes, fn);
- 没有前端路由（组件）， 但是可以通过 后端路由(restful, mvc router )   /xxx.html

- 前端路由二种做法, hashtag # 
history pushState api url path部分改变了，但是没有刷新页面 
state? 这次跳转url对应的状态数据 
title, 
url  
