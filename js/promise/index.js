class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;

    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
      }
    }
    executor(resolve, reject);
  }
  then (onFufilled, onRejected) {
    if (this.status === 'resolved') {
      onFufilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }
  }
}

module.exports = Promise