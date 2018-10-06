[source](https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter19.md)

getBoundingClientRect()？


- 数学公式的应用，让元素的运动符合抛物线的运动轨迹。
  Y = A*X*X + B*X + C
- 起点和终点 getBoundingClientRect()
- 参数
  1. 加速度
    L = 0.5 * A * T * T 加速A与时间T的平方成反比。
  2. 时间T与X轴初速度
  水平移动速度固定 L(水平) = T * Xspeed
  ```
    let XStart = 0, YStart = 0, XEnd = 1000, YEnd = 1000;
    let Xspeed = xx;
    let Time = (XEnd - XStart) / Xspeed;
    let A = 2 * (YEnd - YStart) / (Time * Time);
  ```
  动画执行时长固定呢？
  let Time = XX;
  let Xpeed = (XEnd - XStart)/Time;
  let A = 2*(YEnd-Ystart) / (Time * Time)

抛物线 
购物车效果常用


