<template>
<div>
  <div>{{ html }}</div>
</div>
</template>
<script>
import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html :'还没有点击'
    }
  },
  created() {
    this.$on('global:clickA', (target) => {
      this.html = `第${target}个元素被点击`
    });
    // Bus.$on('getTarget', target => {
    //   this.html = `第${target}个元素被点击`
    // })
  }
}
</script>
<style>
</style>

