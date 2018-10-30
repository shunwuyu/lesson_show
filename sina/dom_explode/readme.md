[source](https://zhuanlan.zhihu.com/p/47770130)
[zxx](https://www.zhangxinxu.com/study/201612/how-to-use-tween-js.html)

粒子爆炸效果组件，

- 点击，动画开始的起点
- 抛物线粒子运动的元素，方向随机，展示内容不一样， 有空间上Z轴的大小变化
- 无间隔
- 基本执行时长一致
- 性能问题
  1. css 操作变态，不可多次点击
  2. js 切换类名， 效果固定， 无法连续执行动画
  3. 事件动画， 元素， 随机选择， 
  4. canvas  
  5. domm 生成随机keyframes 性能

js 刷的DOM操作
  partical.js 和boom.js粒子管理

