<template>
<div>
  <el-button type="primary" icon="upload" style="position:absolute;bottom:15px;margin-left:40px;" @click="imagecropperShow=true">Change avatar</el-button>
  <image-cropper :width="300" :height="300" url="https://httpbin.org/post" @close='close' @crop-upload-success='cropSuccess' langType="en" :key="imagecropperKey" v-show="imagecropperShow"></image-cropper>
</div>
</template>
<script>
import ImageCropper from '@/components/ImageCropper'

export default {
  data () {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  methods: {
    close () {
      
      this.imagecropperShow = false
    },
    cropSuccess () {

    }
  },
  components: {
    ImageCropper
  }
}  
</script>
<style>
.avatar{
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
