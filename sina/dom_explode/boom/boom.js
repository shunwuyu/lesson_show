class Boom {
  constructor({ childList, container, boomNumber, rotate, spread, delayRange, power } = {}) {
    this.particalList = [];
    this.boomTimer = 0;
    this.boomTimeGap = .1e3;
    this.childList = childList || [];
    this.con = container || null;
    this.particalNumbers = boomNumber || 6;
    this.rotate = rotate || 120;
    this.spread = spread || 180;
    this.delayRange = delayRange || 100;
    this.power = power || 3;
    this.createParticals(this.particalNumbers)
  }
  setContainer(con) {
    this.con = con;
  }
  createParticals(num) {
    for (let i = 0; i < num; i++) {
      let partical = new Partical();
      partical.onAnimationEnd(() => {
        partical.deleteEl();
      })
      this.particalList.push(partical);
    }
  }
  boom() {
    // alert('boom');
    let lastBoomTimer = this.boomTimer;
    let now = +new Date();
    if (now - lastBoomTimer < this.boomTimeGap) {
      return;
    }
    // console.log('sddd');
    this.boomTimer = now;
    // console.warn("粒子总数：", this.particalList.length)
    let boomNums = 0;
    let unAnimateList = this.particalList.filter(partical => partical.animating == false)
    // console.log(unAnimateList);
    let childList = this.childList;
    let childListLength = childList.length;
    let rotate = this.rotate;
    let spread = this.spread;
    let delayRange = this.delayRange;
    let power = this.power;

    for (let partical of unAnimateList) {
      if ( boomNums >= this.particalNumbers) return;
      if (partical.animating) {
        continue;
      }
      boomNums++;
      let r = Math.random();
      partical.renderIn(this.con);
      partical.insertChild(childList[Math.floor(r*childListLength)].cloneNode(true));
      partical.animate({
        deg: (r * spread + rotate) % 360,
        pow: r * power + 1,
        delay: r * delayRange,
      });
    }
    if (boomNums < this.particalNumbers) {
      this.createParticals(this.particalNumbers - boomNums);
    }
  }
}