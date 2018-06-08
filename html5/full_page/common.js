class PureFullPage {
  constructor (options) {
    const defaultOptions = {
      isShowNav: true,
      delay: 1000,
      definePages: () => {}
    }
    utils.polyfill();
    this.options = Object.assign(defaultOptions, options);
    this.options.definePages = this.options.definePages.bind(this);
    this.container = document.querySelector('#pureFullPage');
    this.pages = document.querySelectorAll('.page');
    this.pagesNum = this.pages.length;
    this.navDots = [];
    this.viewHeight = document.documentElement.clientHeight;
    // 负值，相对于视图窗口顶部向下的偏移量
    this.currentPosition = 0;
    this.DELAY = this.options.delay;
    this.startY = undefined;
  }

  scrollMouse (event) {
    const delta = utils.getWheelDelta(event);
    console.log(delta);
    if (delta < 0) {
      this.goDown();
    } else {
      this.goUp();
    }
  }

  goUp() {
    if (-this.container.offsetTop >= this.viewHeight) {
      this.currentPosition = this.currentPosition + this.viewHeight;
      this.turnPage(this.currentPosition);
      this.changeNavStyle(this.currentPosition);
      this.options.definePages();
    }
  }

  changeNavStyle(height) {
    if (this.options.isShowNav) {
      this.navDots.forEach(el => {
        utils.deleteClassName(el, 'active');
      })
      const i = -(height / this.viewHeight);
      this.navDots[i].classList.add('active');
    }
  }

  goDown() {
    if (-this.container.offsetTop <= this.viewHeight * (this.pagesNum - 2)) {
      this.currentPosition = this.currentPosition-this.viewHeight;
      this.turnPage(this.currentPosition);
      this.changeNavStyle(this.currentPosition);
      this.options.definePages();
    }
    // if (-this.container.offsetTop)
  }

  turnPage(height) {
    this.container.style.top = `${height}px`;
  }

  touchEnd (event) {
    const endY = event.changedTouches[0].pageY;
    // console.log(endY);
    if (endY - this.startY < 0) {
      this.goDown();
    } else {
      this.goUp();
    }
  }

  createNav () {
    const nav = document.createElement('div');
    nav.className = 'nav';
    this.container.appendChild(nav);
    console.log(this.pagesNum);
    for (let i = 0; i < this.pagesNum; i++) {
      nav.innerHTML += '<p class="nav-dot"><span></span></p>'
    }
    const navDots = document.querySelectorAll('.nav-dot');
    this.navDots = Array.prototype.slice.call(navDots);
    this.navDots[0].classList.add('active');
    this.navDots.forEach((el, i) => {
      el.addEventListener('click', () => {
        this.currentPosition = -(i * this.viewHeight);
        this.options.definePages();
        this.turnPage(this.currentPosition);
        this.navDots.forEach(el => {
          utils.deleteClassName(el, 'active');
        })
        el.classList.add('active');
      })
    })
  }

  init () { 
    // console.log(document.documentElement);
    this.container.style.height = `${this.viewHeight}px`;
    if (this.options.isShowNav) {
      this.createNav();
    }
    // 截流
    const handleMouseWheel = utils.throttle(this.scrollMouse, this, this.DELAY);
    // console.log(navigator.userAgent);
    if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
      document.addEventListener('mousewheel', handleMouseWheel);
    } else {
      document.addEventListener('DOMMouseScroll', handleMouseWheel);
    }

    document.addEventListener('touchstart', event => {
      console.log(event.touches[0]);
      this.startY = event.touches[0].pageY;
    });
    const handleTouchEnd = utils.throttle(this.touchEnd, this, 500);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchmove', event => {
      event.preventDefault();
    });
    window.addEventListener('resize', this.handleWindowResize.bind(this))
  }

  handleWindowResize(event) {
    utils.debounce(this.getNewPosition, this, event, this.DELAY);
  }

  getNewPosition() {
    this.viewHeight = document.documentElement.clientHeight;
    this.container.style.height = `${this.viewHeight}px`;
    this.currentPosition = -(activeNavIndex * this.viewHeight);
    this.turnPage(this.currentPosition);
  }
}