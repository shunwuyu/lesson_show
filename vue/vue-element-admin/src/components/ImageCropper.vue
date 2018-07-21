<template>
<div class="vue-image-crop-upload" v-show="value">
  <div class="vicp-wrap">
    <div class="vicp-close" @click="off">
      <i class="vicp-icon4"></i>
    </div>
    <div class="vicp-step1" v-show="step==1">
      <div class="vicp-drop-area" @click="handleClick" @dragover="preventDefault" @dragleave="preventDefault"
      @dragenter="preventDefault" @drop="handleChange"
      >
        <i class="vicp-icon1" v-show="loading!=1">
          <i class="vicp-icon1-arrow"></i>
          <i class="vicp-icon1-body"></i>
          <i class="vicp-icon1-bottom"></i>
        </i>
        <span class="vicp-hint" v-show="loading!=1">Click or drag the file here to upload</span>
        <span class="vicp-no-supported-hint" v-show="!isSupported">不支持</span>
        <input type="file" v-show="false" v-if="step==1" ref="fileinput" @change="handleChange">
      </div>
      <div class="vicp-error" v-show="hasError">
        <i class="vicp-icon2"></i>{{errorMsg}}
      </div>
      <div class="vicp-operate">
        <a @click="off" @mousedown="ripple">Cancel</a>
      </div>
    </div>
    <div class="vicp-step2" v-if="step==2">
      <div class="vicp-crop">
        <div class="vicp-crop-left" v-show="true">
          <div class="vicp-img-container">
            <img :src="sourceImgUrl" 
            :style="sourceImgStyle"
            alt="" class="vicp-img" ref="img">
            <div class="vicp-img-shade vicp-img-shade-1" :style="sourceImgShadeStyle"></div>
            <div class="vicp-img-shade vicp-img-shade-2" :style="sourceImgShadeStyle"></div>
          </div>
          <div class="vicp-range">
            <input type="range" :value="scale.range" step="1" min="0" max="100" @input='zoomChange'>
            <i class="vicp-icon5"></i>
            <i class="vicp-icon6"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// import effectRipple from './utils/effectRipple.js'
export default {
  data () {
    let isSupported = true
    console.log(FormData)
    if (typeof FormData !== 'function') {
      isSupported = false
    }
    const { width, height } = this
    return {
      sourceImg: null,
      sourceImgContainer: {
        width: 240,
        height: 184
      },
      isSupported,
      step: 1,
      loading: 0,
      hasError: false,
      errorMsg: '',
      progress: 0,
      sourceImgUrl: '',
      ratio: width / height,
      scale: {
        zoomAddOn: false,
        zoomSubOn: false,
        range: 1,
        rotateLeft: false,
        rotateRight: false,
        degree: 0,
        width: 0,
        height: 0,
        maxWidth: 0,
        maxHeight: 0,
        minWidth: 0,
        minHeight: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }
    }
  },
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    maxSize: {
      type: Number,
      default: 10240
    },
    value: {
      'default': true
    }
  },
  methods: {
    zoomImg(newRange) {
      const {
        
      } = this;
    },
    zoomChange () {
      this.zoomImg(e.target.value)
    },
    ripple (e) {
      // effectRipple(e)
    },
    off () {
      setTimeout(() => {
        this.$emit('input', false);
        this.$emit('close');
      }, 200);
    },
    reset () {
      this.loading = 0;
      this.hasError = false;
      this.errorMsg = '';
      this.progress = 0
    },
    startCrop () {
      let { width, height, ratio, scale, sourceImgUrl, sourceImgMasking} = this;
      let sim = sourceImgMasking;
      let img = new Image();
      img.src = sourceImgUrl;
      img.onload = () => {
        let nWidth = img.naturalWidth,
        nHeight = img.naturalHeight,
        nRatio = nWidth/nHeight,
        w = sim.width,
        h = sim.height,
        x = 0,
        y = 0
        console.log(nWidth, width, nHeight, height);
        if (nWidth < width || nHeight < height) {
          this.hasError = true;
          this.errorMsg = '像素低于' + width + '*' + height
          // console.log('sss');
          return false
        }
        if (ratio > nRatio) {
          h  = w / nRatio
          y = (sim.height - h) / 2;
        }
        if (ratio < nRatio) {
          w = h * nRatio
          x = (sim.width - w) / 2
        }
        scale.range = 0
        scale.x = x
        scale.y = y
        scale.width = w
        scale.height = h
        scale.degree = 0
        scale.minWidth = w
        scale.minHeight = h
        scale.maxWidth = nWidth * sim.scale
        scale.maxHeight = nHeight * sim.scale
        scale.naturalWidth = nWidth
        scale.naturalHeight = nHeight
        this.sourceImg = img
        this.createImg()
        this.setStep(2)
      }
    },
    createImg (e) {

    },
    setStep (no) {
      setTimeout(() => {
        this.step = no
      }, 200)
    },
    handleChange (e) {
      e.preventDefault()
      if (this.loading !== 1) {
        const files = e.target.files || e.dataTransfer.files
        this.reset()
        if (this.checkFile(files[0])) {
          this.setSourceImg(files[0])
        }
      }
    },
    setSourceImg (file) {
      let fr = new FileReader();
      fr.onload = (e) => {
        this.sourceImgUrl = fr.result
        this.startCrop();
      }
      fr.readAsDataURL(file);
    },
    checkFile (file) {
      let { maxSize } = this
      console.log(file.type);
      if (file.type.indexOf('image') === -1) {
        this.hasError = true
        this.errorMsg = '只能上传图片'
        return false
      }
      if (file.size / 1024 > maxSize) {
        this.hasError = true
        this.errorMsg = '文件大小不能超过' + maxSize + 'kb'
        return false
      }
      return true
    },
    handleClick (e) {
      if (this.loading !== 1) {
        if (e.target !== this.$refs.fileinput) {
          e.preventDefault()
          console.log(this.$refs);
          if (document.activeElement !== this.$refs) {
            this.$refs.fileinput.click()
          }
        }
      }
    },
    preventDefault (e) {
      e.preventDefault()
      return false
    }
  },
  computed: {
    sourceImgShadeStyle () {
      const {
        sourceImgMasking,
        sourceImgContainer
      } = this
      const sic = sourceImgContainer
      const sim = sourceImgMasking
      const w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2
      const h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2
      return {
        width: w + 'px',
        height: h + 'px'
      }
    },
    sourceImgStyle () {
      const {
        scale,
        sourceImgMasking
      } = this
      // console.log(scale, sourceImgMasking);
      const top = scale.y + sourceImgMasking.y + 'px'
      const left = scale.x + sourceImgMasking.x + 'px'
      return {
        top,
        left,
        width: scale.width + 'px',
        height: scale.height + 'px',
        transform: 'rotate(' + scale.degree + 'deg)',
        '-ms-transform': 'rotate(' + scale.degree + 'deg)', // 兼容IE9
        '-moz-transform': 'rotate(' + scale.degree + 'deg)', // 兼容FireFox
        '-webkit-transform': 'rotate(' + scale.degree + 'deg)', // 兼容Safari 和 chrome
        '-o-transform': 'rotate(' + scale.degree + 'deg)'
      }
    },
    sourceImgMasking () {
      const {
        width,
        height,
        ratio,
        sourceImgContainer
      } = this
      const sic = sourceImgContainer;
      const sicRatio = sic.width / sic.height
      let x = 0
      let y = 0
      let w = sic.width
      let h = sic.height
      let scale = 1
      if (ratio < sicRatio) {
        scale = sic.height / height
        w = sic.height * ratio
        x = (sic.width - w) / 2
      }
      if (ratio > sicRatio) {
        scale = sic.width / width
        h = sic.width /ratio
        y = (sic.height - h ) / 2
      }

      return {
        scale,
        x,
        y,
        width: w,
        height: h
      }
    }
  }
}  
</script>

<style>
@keyframes vicp {
  0% {
    opacity: 0;
    -webkit-transform: scale(0) translatey(-60px);
    transform: scale(0) translatey(-60px);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translatey(0);
    transform: scale(1) translatey(0);
  } 
}
.vue-image-crop-upload {
  position: fixed;
  display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
}
.vue-image-crop-upload .vicp-wrap {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  position: fixed;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 600px;
  height: 330px;
  padding: 25px;
  background-color: #fff;
  border-radius: 2px;
  -webkit-animation: vicp 0.12s ease-in;
  animation: vicp 0.12s ease-in; 
}
.vue-image-crop-upload .vicp-wrap .vicp-close {
  position: absolute;
  right: -30px;
  top: -30px; 
}
.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4 {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.18s;
  transition: -webkit-transform 0.18s;
  transition: transform 0.18s;
  transition: transform 0.18s, -webkit-transform 0.18s;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}
.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after, .vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::before {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  content: '';
  position: absolute;
  top: 12px;
  left: 4px;
  width: 20px;
  height: 3px;
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
  background-color: #fff;
}
.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg); 
}
.vue-image-crop-upload .vicp-wrap .vicp-close .vicp-icon4:hover {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 35px;
  height: 170px;
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
  border: 1px dashed rgba(0, 0, 0, 0.08);
  overflow: hidden; 
}

.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 {
  display: block;
  margin: 0 auto 6px;
  width: 42px;
  height: 42px;
  overflow: hidden; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-arrow {
  display: block;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-bottom: 14.7px solid rgba(0, 0, 0, 0.3);
  border-left: 14.7px solid transparent;
  border-right: 14.7px solid transparent; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-body {
  display: block;
  width: 12.6px;
  height: 14.7px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-icon1 .vicp-icon1-bottom {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: block;
  height: 12.6px;
  border: 6px solid rgba(0, 0, 0, 0.3);
  border-top: none; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-hint {
  display: block;
  padding: 15px;
  font-size: 14px;
  color: #666;
  line-height: 30px;
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area .vicp-no-supported-hint {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  width: 100%;
  height: 60px;
  line-height: 30px;
  background-color: #eee;
  text-align: center;
  color: #666;
  font-size: 14px;
}
.vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-error, .vue-image-crop-upload .vicp-wrap .vicp-step3 .vicp-upload .vicp-success {
  height: 100px;
  line-height: 100px; 
}
.vue-image-crop-upload .vicp-wrap .vicp-error,
    .vue-image-crop-upload .vicp-wrap .vicp-success {
  display: block;
  font-size: 14px;
  line-height: 24px;
  height: 24px;
  color: #d10;
  text-align: center;
  vertical-align: top;
}
.vue-image-crop-upload .vicp-wrap .vicp-step1 .vicp-drop-area:hover {
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05); 
}
.vue-image-crop-upload .vicp-wrap .vicp-operate {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.vue-image-crop-upload .vicp-wrap .vicp-operate a {
  position: relative;
  float: left;
  display: block;
  margin-left: 10px;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  color: #4a7;
  border-radius: 2px;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.vue-image-crop-upload .vicp-wrap .vicp-operate a:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop {
  overflow: hidden;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left {
  float: left;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container {
  position: relative;
  display: block;
  width: 240px;
  height: 180px;
  background-color: #e5e5e0;
  overflow: hidden;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img {
  position: absolute;
  display: block;
  cursor: move;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
      user-select: none;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade {
  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  position: absolute;
  background-color: rgba(241, 242, 243, 0.8);
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-1 {
  top: 0;
  left: 0;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container .vicp-img-shade.vicp-img-shade-2 {
  bottom: 0;
  right: 0;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range {
  position: relative;
  margin: 30px 0 10px 0;
  width: 240px;
  height: 18px;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {
  position: absolute;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.08); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5:hover,
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6:hover {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.14); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5 {
  left: 0; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5::before {
  position: absolute;
  content: '';
  display: block;
  left: 3px;
  top: 8px;
  width: 12px;
  height: 2px;
  background-color: #fff; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6 {
  right: 0;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::before {
  position: absolute;
  content: '';
  display: block;
  left: 3px;
  top: 8px;
  width: 12px;
  height: 2px;
  background-color: #fff; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::after {
  position: absolute;
  content: '';
  display: block;
  top: 3px;
  left: 8px;
  width: 2px;
  height: 12px;
  background-color: #fff;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range] {
  display: block;
  padding-top: 5px;
  margin: 0 auto;
  width: 180px;
  height: 8px;
  vertical-align: top;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus {
  outline: none;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-thumb {
  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  -webkit-appearance: none;
  appearance: none;
  margin-top: -3px;
  width: 12px;
  height: 12px;
  background-color: #61c091;
  border-radius: 100%;
  border: none;
  -webkit-transition: 0.2s;
  transition: 0.2s; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-thumb {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  -moz-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #61c091;
  border-radius: 100%;
  border: none;
  -webkit-transition: 0.2s;
  transition: 0.2s; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-thumb {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #61c091;
  border: none;
  border-radius: 100%;
  -webkit-transition: 0.2s;
  transition: 0.2s; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-moz-range-thumb {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  width: 14px;
  height: 14px; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-ms-thumb {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  width: 14px;
  height: 14px;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:active::-webkit-slider-thumb {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  margin-top: -4px;
  width: 14px;
  height: 14px;
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-webkit-slider-runnable-track {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  background-color: rgba(68, 170, 119, 0.3); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-moz-range-track {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  background-color: rgba(68, 170, 119, 0.3); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-track {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
  height: 6px;
  border-radius: 2px;
  border: none; 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-lower {
  background-color: rgba(68, 170, 119, 0.3); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]::-ms-fill-upper {
  background-color: rgba(68, 170, 119, 0.15); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-webkit-slider-runnable-track {
  background-color: rgba(68, 170, 119, 0.5); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-moz-range-track {
  background-color: rgba(68, 170, 119, 0.5); 
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-lower {
  background-color: rgba(68, 170, 119, 0.45);
}
.vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]:focus::-ms-fill-upper {
  background-color: rgba(68, 170, 119, 0.25);
}
</style>
