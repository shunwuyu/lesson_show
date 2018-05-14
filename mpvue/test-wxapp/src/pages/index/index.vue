<template>
  <div class="container">
    <mptoast/>
  </div>
</template>

<script>
import mptoast from 'mptoast'
export default {
  data () {
    return {
    }
  },
  components: {
    mptoast
  },
  methods: {
    showToast () {
      this.$mptoast('我是提示信息')
    }
  },

  created () {
    this.showToast()
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>

</style>
