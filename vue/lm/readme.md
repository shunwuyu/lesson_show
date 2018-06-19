[source](https://juejin.im/book/5a36661851882538e2259c0f/section/5a37bbb35188257d167a4d64)

## 初始化及挂载
new Vue 之后， Vue 会调用_init函数进行初始化， （生命周期、事件、props、methods、data、computed与watch等）
Object.defineProperty 设置setter与getter函数，用来实现响应式以及依赖收集。
$mount 挂载组件, 如果是运行时编译， 即不存在render function 如果template, 编译


## 编译
  compile 可以分成parse、optimize 与generate三个阶段，最终得到render function
  ### parse
  正则 template模板中的指令、class、style等数据，形成AST。

  ### optimize

  static静态节点， 一处优化， update更新界面时， 会有一个patch的过程，diff算法会直接跳过静态节点， 从而减少了比较的过程，优化了patch的性能

  generate
    将AST转化成render function 字符串的过程，得到结果是render字符串以及staticRenderFns字符串。

    之后， 组件中会存在渲染VNode所需的render function了。

## 响应式
  defineProperty getter setter , 读取时会执行getter函数， 而在被赋值时执行setter函数

  依赖收集将观察者Watcher对象存放在当前闭包中的订阅者Dep的subs中。 

## Virtual DOM 
render function VNode节点, JavaScript对象作为基础的树， 对真实DOM的抽象。 

{
  tag: 'div',
  children: [
    {
      tag: 'a',
      text: 'click me'
    }
  ]
}

isStatic 静态节点， isComment代表注释节点。

## 更新视图
setter->watcher->update流程来修改对应的视图，
数据变化后， 执行render function 可以得到一个新的VNode节点， 
只修改我们改变了的地方， patch, 
新的VNode 和旧的VNode 一起传入patch 进行比较， 经过diff算法片出它们的差异， 对应DOM进行修改即可。 

# 响应系统的基本原理
data => observer => defineReactive 


## 响应式系统
  数据模型是普通的JavaScript对象， 对象操作， 影响视图， 核心是响应式系统

  obj 目标对象
  prop 需要操作的目标对象的属性名
  descriptor 描述符
  enumberable 是否可枚举， false
  configurable  被修改或删除， false
  get 获取属性的方法
  set 设置属性的方法

## 实现可观察observer
cb 函数， 视图更新， 更新视图方法。
defineReactive  入参是一个obj (绑定的对象)，key(obj的某一个属性), val(具体的值)，reactiveGetter方法， 写时会reactiveSetter方法。 

```js
  function defineReactive(obj, key, value) {
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        return val;
      },
      set: function reativeSetter () {
        if (newVal === val) return;
        cb(newVal);
      }
    })
  }
```
封装一层observer, 遍历每一个属性都通过defineReactive 处理

```
  function observer (value) {
    if (!value || (typeof value !== 'object')) {
      return;
    }
    Object.keys(value).forEach((key) => {
      defineReactive(value, key, value[key])
    })
  }
```


