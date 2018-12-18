class ImgLoader {
  constructor(pageContext, defaultCallback) {
    this.page = pageContext
    this.defaultCallback = defaultCallback || function() {}
    this.callbacks = {}
    this.imgInfo = {}

    this.page.data.imgLoadList = []
    this.page._imgOnLoad = this._imgOnLoad.bind(this)
    this.page._imgOnLoadError = this._imgOnLoadError.bind(this)
  }

  load (src, callback) {
    if (!src) return;
    console.log(src);
    let list = this.page.data.imgLoadList,
    // console.log(list);
      imgInfo = this.imgInfo[src]
    
    // console.log(imgInfo);
    
    if (callback)
      this.callbacks[src] = callback
    
    if (imgInfo) {
      this._runCallback(null, {
        src: src,
        width: imgInfo.width,
        height: imgInfo.height
      })
    } else if (list.indexOf(src) == -1){
        list.push(src)
        this.page.setData({
          'imgLoadList': list
        })
    }


  }
  _imgOnLoad(ev) {
    let src = ev.currentTarget.dataset.src,
    width = ev.detail.width,
    height = ev.detail.height;
    console.log(src, width, height);
    
    this.imgInfo[src] = { width, height }
    this._removeFromLoadList(src)
    this._runCallback(null, { src, width, height })
  }
  _imgOnLoadError(ev) {}
  _removeFromLoadList(src) {
    let list = this.page.data.imgLoadList
    list.splice(list.indexOf(src), 1)
    this.page.setData({'imgLoadList': list})
  }
  _runCallback (err, data) {
    let callback = this.callbacks[data.src] || this.defaultCallback
    callback(err, data);
    delete this.callbacks[data.src]
  }
}

module.exports = ImgLoader