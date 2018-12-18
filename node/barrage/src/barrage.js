class Barrage {
  constructor(obj, ctx) {
    this.value = obj.value;
    this.time = obj.time;
    this.obj = obj;
    this.context = ctx;
  }
  init () {
    this.color = this.obj.color || this.context.color;
    this.speed = this.obj.speed || this.context.speed;
    this.opacity = this.obj.opacity || this.context.opacity;
    this.fontSize = this.obj.fontSize || this.context.fontSize;

    let p = document.createElement('p');
    p.style.fontSize = this.fontSize + 'px';
    p.innerHTML = this.value;
    document.body.appendChild(p);

    this.width = p.clientWidth;
    document.body.removeChild(p);

    this.x = this.context.canvas.width;
    this.y = this.context.canvas.height * Math.random();

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
  replay () {
    this.clear();
    let time = this.video.currentTime;
    this.barrages.forEach(barrage => {
      barrage.flag = false;
      if (time <= barrage.time) {
        barrage.isInit = false;
      } else {
        barrage.flag = true;
      }
    })
  }
}

export default Barrage;