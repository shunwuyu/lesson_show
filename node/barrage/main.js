let data = [
  { value: '周杰伦的听妈妈的话，让我反复循环再循环', time: 5, color: 'red', speed: 1, fontSize: 22 },
  { value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
  { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 15 },
];

// 获取到所有需要的dom元素
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

// 创建Barrage类，用来实例化每一个弹幕元素
class Barrage {
  constructor(obj, ctx) {
      this.value = obj.value;
      this.time = obj.time;
      this.obj = obj;
      this.context = ctx;
  }
  init() {
      this.color = this.obj.color || this.context.color;
      this.speed = this.obj.speed || this.context.speed;
      this.opacity = this.obj.opacity || this.context.opacity;
      this.fontSize = this.obj.fontSize || this.context.fontSize;

      // 为了计算每个弹幕的宽度，我们必须创建一个元素，然后计算文字的宽度
      let p = document.createElement('p');
      p.style.font = this.fontSize + 'px';
      p.innerHTML = this.value;
      document.body.appendChild(p);
      // 设置弹幕的宽度
      this.width = p.clientWidth;
      document.body.removeChild(p);

      this.x = this.context.canvas.width;
      this.y = this.context.canvas.height * Math.random();

      // 考虑到弹幕会超出顶部和底部的距离，所以需要处理一下超出范围
      // canvas是按照字号基线来展示字体的
      // 如果小于这个字号大小
      if (this.y < this.fontSize) {
          this.y = this.fontSize;
      } else if (this.y > this.context.canvas.height - this.fontSize) {
          this.y = this.context.canvas.height - this.fontSize;
      }
  }
  render() {
      this.context.ctx.font = `${this.fontSize}px Arial`;
      this.context.ctx.fillStyle = this.color;
      this.context.ctx.fillText(this.value, this.x, this.y);
  }
}

// 创建CanvasBarrage类，主要用做canvas来渲染整个弹幕
class CanvasBarrage {
  constructor(canvas, video, opts = {}) {
      // 如果canvas和video都没传，那就直接return掉
      if (!canvas || !video) return;
      // 直接挂到this上
      this.video = video;
      this.canvas = canvas;
      // 给canvas画布设置和video宽高一致
      this.canvas.width = video.width;
      this.canvas.height = video.height;
      // 获取画布
      this.ctx = canvas.getContext('2d');

      // 设置默认参数
      let defOpts = {
          color: '#e91e63',
          speed: 1.5,
          opacity: 0.5,
          fontSize: 20,
          data: []
      };
      // 合并对象并全都挂到this实例上
      Object.assign(this, defOpts, opts);

      // 添加个属性，用来判断播放状态，默认是true暂停
      this.isPaused = true;
      // 得到所有的弹幕消息
      this.barrages = this.data.map(item => new Barrage(item, this));
      // 渲染
      this.render();

      console.log(this);
  }
  render() {
      // 每次渲染先清空画布，防止后面绘制和前面的重叠
      this.clear();
      // 渲染弹幕
      this.renderBarrage();
      // 如果没有暂停的话就继续渲染
      if (this.isPaused === false) {
          // 通过raf渲染动画，递归进行渲染
          requestAnimationFrame(this.render.bind(this));
      }
  }
  renderBarrage() {
      let time = this.video.currentTime;
      this.barrages.forEach(barrage => {
          if (!barrage.flag && time >= barrage.time) {
              if (!barrage.isInit) {
                  barrage.init();
                  barrage.isInit = true;
              }
              barrage.x -= barrage.speed;
              barrage.render();
              if (barrage.x < -barrage.width) {
                  barrage.flag = true;
              }
          }
      });
  }
  clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  add(obj) {
      this.barrages.push(new Barrage(obj, this));
  }
  replay() {
      this.clear();
      let time = this.video.currentTime;
      this.barrages.forEach(barrage => {
          barrage.flag = false;
          if (time <= barrage.time) {
              barrage.isInit = false;
          } else {
              barrage.flag = true;
          }
      });
  }
}

let canvasBarrage;
let ws = new WebSocket('ws://localhost:8080');
ws.onopen = function() {
  ws.onmessage = function(e) {
    // console.log(e);
    // if (typeof e.data === 'string') return;
    // console.log(e);
    let msg = JSON.parse(e.data);
    if (msg.type === 'init') {
      canvasBarrage = new CanvasBarrage(canvas, video, { data: msg.data });
    } else if (msg.type === 'add') {
      console.log(msg);
      canvasBarrage.add(msg.data);
    }
  }
}

video.addEventListener('play', () => {
  canvasBarrage.isPaused = false;
  canvasBarrage.render();
});
video.addEventListener('pause', () => {
  canvasBarrage.isPaused = true;
});
video.addEventListener('seeked', () => {
  canvasBarrage.replay();
});

function send() {
  let value = $txt.value;
  let time = video.currentTime;
  let color = $color.value;
  let fontSize = $range.value;
  let obj = { value, time, color, fontSize };
  // console.log(obj);
  // 添加弹幕数据
  // canvasBarrage.add(obj);
  ws.send(JSON.stringify(obj));
  $txt.value = '';
}

$btn.addEventListener('click', send);
// 回车发送弹幕
$txt.addEventListener('keyup', e => {
    let key = e.keyCode;
    key === 13 && send();
});