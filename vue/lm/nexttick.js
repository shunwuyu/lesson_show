let uid = 0;
class Watcher {
  constructor () {
    this.id = ++uid;
  }
  update () {
    console.log('watch' + this.id + ' update')
  }
  run () {
    console.log('watch' + this.id + '视图更新啦');
  }
}

let callbacks = [];
let pending = false;
function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true
  }
}

(function() {
  let watch1 = new Watcher();
  let watch2 = new Watcher();

  watch1.update();
  watch1.update();
  watch2.update();
})();

