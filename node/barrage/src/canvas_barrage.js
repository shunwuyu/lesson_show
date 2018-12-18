import Barrage from './barrage'
class CanvasBarrage {
  constructor(canvas, video, opts = {}) {
    if (!canvas || !video) return;
    this.video = video;
    this.canvas = canvas;
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    this.ctx = canvas.getContext('2d');
    let defOpts = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    };
    Object.assign(this, defOpts, opts);
    this.isPaused = true;
    this.barrages = this.data.map(item => new Barrage(item, this));
    this.render();
  }
  render() {
    this.clear();
    this.renderBarrage();
    if (this.isPaused === false) {
      requestAnimationFrame(this.render.bind(this));
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  add(obj) {
    this.barrages.push(new Barrage(obj, this));
  }
  renderBarrage() {
    let time = this.video.currentTime;
    console.log(time);
    this.barrages.forEach(barrage => {
      if (!barrage.flag && time >= barrage.time) {
        if (!barrage.isInit) {
          barrage.init();
          barrage.isInit = true;
        }
        barrage.x -= barrage.speed;
        barrage.render();
        if (barrage.x < - barrage.width) {
          barrage.floag = true
        }
      }
    })
  }
}

export default CanvasBarrage;