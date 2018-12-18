class Drawer {
    // _duration = 2;
    constructor (opt) {
      // this.leaveDOM = leaveDOM
      // console.log(leaveDOM);
      this.enterDOM = opt.enterDOM;
      this.leaveDOM = opt.leaveDOM;
      this._duration = 2;
      this._ease = 'ease';
      this.initDOMStyle();
      this.updateTransition();
    }
    initDOMStyle () {
      if (this.enterDOM && this.leaveDOM) {
        this.enterDOM.setAttribute("style",`transition:left ${this.duration}s ${this.ease};`);
        this.leaveDOM.setAttribute("style", `transition:margin-left ${this.duration}s ${this.ease}`);
      }
    }
    get duration() {
      return this._duration
    }
    set duration(duration) {
      this._duration = duration;
      this.updateTransition();
    }
    get ease() {
      return this._ease;
    }
    set ease(ease) {
      this._ease = ease;
      this.updateTransition();
    }
    updateTransition() {
      this.enterTransition = `left: 0px;transition: left ${this.duration}s ${this.ease};`;
      this.leaveTransition = `transition: margin-left ${this.duration}s ${this.ease}; margin-left: 200px;`
    }
    enter() {
      if (this.enterDOM && this.leaveDOM) {
        this.enterDOM.setAttribute("style", this.enterTransition);
        this.leaveDOM.setAttribute("style", this.leaveTransition);
      }
    }
    leave() {
      this.initDOMStyle();
    }
  }
  