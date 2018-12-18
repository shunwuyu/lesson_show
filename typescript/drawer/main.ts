interface IDrwerConfig {
  duration?: number;
  ease?: string;
  enterDOM: HTMLElement | null;
  leaveDOM: HTMLElement | null;
}

class Drawer implements IDrwerConfig {
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  _duration:number = 2
  _ease:string = "ease"
  enterTransition: string
  leaveTransition: string
  constructor (opt) {
    this.enterDOM = opt.enterDOM
    this.leaveDOM = opt.leaveDOM
    this.initDOMStyle();
    this.updateTransition();
  }
  get duration() {
    return this._duration;
  }
  set duration(duration: number) {
    this._duration = duration
  }
  get ease() {
    return this._ease
  }
  set ease(ease: string) {
    this._ease = ease;
  }
  initDOMStyle () {
    if (this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute("style", `transition:left ${this.duration}s ${this.ease};`);
      this.leaveDOM.setAttribute("style", `transition:margin-left ${this.duration}s ${this.ease};`);
    }
  }
  updateTransition () {
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
