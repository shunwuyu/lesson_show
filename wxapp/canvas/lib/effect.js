const STATUS_STOP = 'stop'
const STATUS_RUNNING = 'running'
class Particle {
  constructor(ctx, width, height, opts) {
    this._timer = null;
    this._options = opts || {}
    this.ctx = ctx
    this.status = STATUS_STOP
    this.w = width
    this.h = height
    this._init()
  }
  _init() {}
  _draw() {}
  run() {
    if (this.status !== STATUS_RUNNING) {
      this.status = STATUS_RUNNING
      this._timer = setInterval(() => {
        // console.log('a');
        this._draw()
      }, 30)
    }
    return this
  }
}

class Rain extends Particle {
  _init() {
    console.log(this);
    let ctx = this.ctx
    ctx.setLineWidth(2)
    ctx.setLineCap('round')
    let h = this.h
    let w = this.w
    
    let i
    let amount = this._options.amout || 100
    // console.log(this._options);
    let speedFactor = this._options.speedFactor || 0.03
    let speed = speedFactor * h
    let ps = (this.particles = [])
    
    // console.log(ps, this.particles);
    for (let i = 0; i < amount; i++) {
      let p = {
        x: Math.random() * w,
        y: Math.random() * h,
        l: 2 * Math.random(),
        xs: -1,
        ys: 10 * Math.random() + speed,
        color: 'rgba(255,255,255, .4)'
      }
      ps.push(p)
    }
    // console.log(Math.random() * w);
  }
  _draw() {
    let ps = this.particles
    let ctx = this.ctx
    ctx.clearRect(0, 0, this.w, this.h)
    for(let i = 0; i < ps.length; i++) {
      let s = ps[i]
      ctx.beginPath()
      ctx.moveTo(s.x, s.y)
      ctx.lineTo(s.x + s.l * s.xs, s.y + s.l * s.ys)
      ctx.setStrokeStyle(s.color)
      ctx.stroke()
    }
    ctx.draw()
    return this._update()
  }
  _update() {
    let {w, h} = this
    for (let ps = this.particles, i = 0; i < ps.length; i++) {
      let s = ps[i]
      s.x += s.xs
      s.y += s.ys
      // 重复利用
      if (s.x > w || s.y > h) {
        s.x = Math.random() * w
        s.y = -10
      }
    }
    return this
  }
}

export default (ParticleName, ctx, width, height, opts) => {
  switch (ParticleName.toLowerCase()) {
    case 'rain':
      return new Rain(ctx, width, height, opts)
  }
}