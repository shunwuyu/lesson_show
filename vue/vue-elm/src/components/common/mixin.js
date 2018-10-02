import { getStyle } from '../../config/mUtils'
export const loadMore = {
  directives: {
    'load-more': {
      bind: (el, binding) => {
        // console.log(el)
        let windowHeight = window.screen.height;
        let height;
        let setTop;
        let paddingBottom;
        let marginBottom;
        let requestFram;
        let oldScrollTop;
        let scrollEl;
        let heightEl;
        let scrollType = el.attributes.type && el.attributes.type.value;
        let scrollReduce = 200;
        if (scrollType == 2) {
          scrollEl = el;
					heightEl = el.children[0];
        } else {
          scrollEl = document.documentElement;
					heightEl = el;
        }
        el.addEventListener('touchstart', () => {
          height = heightEl.clientHeight;
          if (scrollType == 2) {
            height = height
          }
          setTop = el.offsetTop;
          paddingBottom = getStyle(el, 'paddingBottom');
          marginBottom = getStyle(el, 'marginBottom');
          console.log(paddingBottom, marginBottom)
        })
        el.addEventListener('touchmove', () => {
          loadMore();
        }, false)
        el.addEventListener('touchend', () => {
					oldScrollTop = scrollEl.scrollTop;
					moveEnd();
        }, false)
        const moveEnd = () => {
					requestFram = requestAnimationFrame(() => {
						if (scrollEl.scrollTop != oldScrollTop) {
							oldScrollTop = scrollEl.scrollTop;
							moveEnd()
						} else {
							cancelAnimationFrame(requestFram);
							height = heightEl.clientHeight;
							loadMore();
						}
					})
				}
        const loadMore = () => {
          console.log(height, setTop, paddingBottom, marginBottom, scrollReduce)
          if (scrollEl.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom - scrollReduce) {
            binding.value();
          }
        }
      }
    }
  }
}

export const getImgPath = {
	methods: {
		//传递过来的图片地址需要处理后才能正常使用
		getImgPath(path) {
			let suffix;
			if (!path) {
				return '//elm.cangdu.org/img/default.jpg'
			}
			if (path.indexOf('jpeg') !== -1) {
				suffix = '.jpeg'
			} else {
				suffix = '.png'
			}
			let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
			return 'https://fuss10.elemecdn.com' + url
		},
	}
}
