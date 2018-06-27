function Dep() {
  this.subs = [];
}

Dep.prototype.addSub = function(key, sub) {
  let fns = this.subs[key];
  if (!fns || fns.length == 0) {
    this.subs[key] = []
  }

  this.subs[key].push(sub);
}

Dep.prototype.notify = function(key) {
  this.subs[key].forEach(function(sub) {
    sub.update()
  });
}

function Watcher(opt) {
  this.opt = opt;
  this.fn = opt.fn || function() {};
}

Watcher.prototype.update = function() {
  this.fn();
}

var dep = new Dep();
dep.addSub('marriage', new Watcher({
  name: '潘晓婷',
  fn: function() {
    console.log(`曾凯要结婚了，${this.opt.name}再也没有机会了`);
  }
}));
dep.notify('marriage');