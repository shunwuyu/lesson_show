[source](https://blog.csdn.net/u013034014/article/details/54574989)
[source](https://juejin.im/post/5b45971ff265da0f9c678b55)
# 实现兄弟组件通信

相互通信的兄弟组件之中， 都引入一个vue 实例， 然后通过分别调用这个实例的事件触发和监听来实现通信和参数传递

发布订阅来通知下兄弟组件执行个方法？
引入一个eventbus 后， 手动调用off而头疼
pub sub $on $emit  fire listen

Vue 支持全局事件， 在全局通知的时候加入global:  
this.$emit('global:你的事件名字');
this.$on('global:事件名字', () => {});

