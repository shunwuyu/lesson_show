// 截流throttle, 在规定时间只执行一次，先执行
//  debounce 防抖都为解决 在规定时间执行一次，后执行
// 高频事件而来 scroll mousewheel mousemover
// mousemove touchemove onresize
const utils = {
  // 帮忙method执行的次数在规定时间内只有一次
  // method执行时，函数内的this PureFullpage
  // this.container
  throttle (method, context, delay) {
    // args?
    // 返回的函数就是等下事件执行的真正函数体
    // 闭包
    let wait = false;
    return function(...args) {
      // console.log(args);
      if (!wait) {
        method.apply(context, args)
        wait = true;
        setTimeout(() => {
          wait = false
        }, delay)
      }
    }
  },
  debounce (method, context, event, delay) {
    // window.resize 不要急， 等一下再执行
    clearTimeout(context.tId);
    // 定时器保持它的名字？
    // js 动态语言， 
    context.tId = setTimeout(() => {
      method.call(context, event);
    } ,delay)
  },
  getWheelDelta (event) {
    // console.log(event);
    if (event.wheelDelta) {
      this.getWheelDelta = event => event.wheelDelta;
      return event.wheelDelta;
    }
  }
}