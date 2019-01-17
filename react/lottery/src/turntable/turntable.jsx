const noPrize = 'https://user-gold-cdn.xitu.io/2018/10/15/16677fb978eb1538?w=128&h=128&f=png&s=6861';
export default class Turntable {
  constructor(options) {
    this.canvas = options.canvas
    this.context = options.context
    this.startRadian = 0
    this.canBeClick = true
    this.awards = [
      { level: '特等奖', name: '我的亲笔签名', color: '#576c0a' },
      { level: '未中奖', name: '未中奖', color: '#ad4411' },
      { level: '一等奖', name: '玛莎拉蒂超级经典限量跑车', color: '#43ed04' },
      { level: '未中奖', name: '未中奖', color: '#d5ed1d' },
      { level: '二等奖', name: '辣条一包', color: '#32acc6' },
      { level: '未中奖', name: '未中奖', color: '#e06510' },
    ]
  }
  startRotate () {
    const canvas = this.canvas
    const context = this.context
    const canvasStyle = canvas.getAttribute('style')
    this.render()
    canvas.addEventListener('mousedown', e => {
      if (!this.canBeClick) return
      this.canBeClick = false
      let loc = this.windowToCanvas(canvas, e)
      context.beginPath()
      context.arc(150, 150, 30, 0, Math.PI * 2, false)
      if (context.isPointInPath(loc.x, loc.y)) {
        console.log(loc.x, loc.y);
        this.startRadian = 0
        const distance = this.distanceToStop()
        console.log(distance);
        this.rotatePanel(distance);
      }
    });
  }
  rotatePanel(distance) {
    let changeRadian = (distance - this.startRadian) * (100 / (Math.random() * 5000 + 4000) * 1.5)
    this.startRadian += changeRadian
    if (distance - this.startRadian <= 0.05) {
      // 停下来
      this.canBeClick = true;
      return
    }
    this.render()
    window.requestAnimationFrame(this.rotatePanel.bind(this, distance));
  }
  distanceToStop () {
    let middleDegrees = 0, distance = 0
    // middleDegrees为奖品块的中间角度（我们最终停留都是以中间角度进行计算的）距离初始的startRadian的距离，distance就是当前奖品跑到指针位置要转动的距离。
    const awardsToDegreesList = this.awards.map((data, index) => {
      let awardRadian = (Math.PI * 2) / this.awards.length
      // console.log(awardRadian);
      return awardRadian * index + (awardRadian * (index + 1) - awardRadian * index) / 2
    });
    console.log(awardsToDegreesList);
    const currentPrizeIndex = Math.floor(Math.random() * this.awards.length)
    middleDegrees = awardsToDegreesList[currentPrizeIndex];
    // 因为指针是垂直向上的，相当坐标系的Math.PI/2,所以我们这里要进行判断来移动角度
    distance = Math.PI * 3 / 2 - middleDegrees
    distance = distance > 0 ? distance : Math.PI * 2 + distance
    // 这里额外加上后面的值，是为了让转盘多转动几圈，看上去更像是在抽奖
    return distance + Math.PI * 50;
  }
  windowToCanvas(canvas, e) {
    const canvasPosition = canvas.getBoundingClientRect(), x = e.clientX, y = e.clientY;
    // console.log(canvasPosition);
    return {
      x: x - canvasPosition.left,
      y: y - canvasPosition.top
    }
  }
  render () {
    this.drawPanel()
    this.drawPrizeBlock()
    this.drawButton()
    this.drawArrow()
  }
  drawButton () {
    const context = this.context
    context.save()
    context.beginPath()
    context.fillStyle = '#FF0000'
    context.arc(150, 150, 30, 0, Math.PI * 2, false)
    context.fill()
    context.restore()

    context.save()
    context.beginPath()
    context.fillStyle = '#fff'
    context.font= '20px Arial'
    context.translate(150, 150)
    context.fillText('Start', -context.measureText('Start').width / 2, 8)
    context.restore()
  }
  drawPanel () {
    const context = this.context
    const startRadian = this.startRadian
    context.save()
    context.beginPath();
    context.fillStyle = '#FD6961'
    context.arc(150, 150, 150, startRadian, Math.PI * 2 + startRadian, false)
    context.fill()
    context.restore();
  }
  drawPrizeBlock () {
    const context = this.context
    const awards = this.awards
    let startRadian = this.startRadian, RadianGap=Math.PI*2/6,endRadian=startRadian + RadianGap
    for (let i = 0; i < awards.length; i++) {
      context.save()
      context.beginPath()
      context.fillStyle = awards[i].color
      context.moveTo(150, 150)
      context.arc(150, 150, 140, startRadian, endRadian, false)
      context.fill()
      context.restore()

      context.save()
      context.fillStyle = '#FFF'
      context.font = '14px Arial'
      context.translate(
        150 + Math.cos(startRadian + RadianGap / 2) * 140,
        150 + Math.sin(startRadian + RadianGap / 2) * 140
      )
      context.rotate(startRadian + RadianGap / 2 + Math.PI / 2)
      this.getLineTextList(context, awards[i].name, 70).forEach((line, index) => {
        context.fillText(line, -context.measureText(line).width/2, ++index * 25)
      })
      context.restore()
      startRadian += RadianGap
      endRadian += RadianGap
    }
  }

  getLineTextList (context, text, maxLineWidth) {
    let wordList = text.split(''), tempLine = '', lineList = []
    for (let i = 0; i < wordList.length; i++) {
      if (context.measureText(tempLine).width >= maxLineWidth) {
        // console.log(text[0]);
        lineList.push(tempLine)
        //每次减少一个字的宽度
        maxLineWidth -= context.measureText(text[0]).width
        tempLine = ''
      }
      tempLine += wordList[i]
    }
    lineList.push(tempLine)
    return lineList
  }
  drawArrow () {
    const context = this.context
    context.save()
    context.beginPath()
    context.fillStyle = '#FF0000'
    context.moveTo(140, 125)
    context.lineTo(150, 100)
    context.lineTo(160, 125)
    context.closePath()
    context.fill()
    context.restore()
  }
}