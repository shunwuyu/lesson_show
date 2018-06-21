class Promise {
  constructor(executor) { //executor执行器
    this.status = 'pending'; //默认等待状态
    this.value = undefined; //成功的值
    this.reason = undefined //失败的原用
    //存放then成功，失败的回调的数组
    this.onResovleCallbacks = [];
    this.onRejectedCallbacks = [];
    
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'resolved'; //成功
        this.value = value;
        this.onResovleCallbacks.forEach(fn => fn());
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'; //失败
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    executor(resolve, reject); //默认上执行器执行
  }
  then(onFufilled, onRejected) {
    if (this.status === 'resolved') { //成功态
      onFufilled(this.value);
    }
    if (this.status === 'rejected') { //失败态
      onRejected(this.reason);
    }
    if (this.status === 'pending') {
      this.onResovleCallbacks.push(() => {
        onFufilled(this.value)
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

module.exports = Promise