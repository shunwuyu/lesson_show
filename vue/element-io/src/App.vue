<template>
  <div id="app">
    <el-alert
    show-icon
    title="成功提示的文案"
    description="说明"
    @close="doAlertClose"
    type="success">
    </el-alert>
  </div>
</template>

<script>
import ElAlert from '@/components/ElAlert'
export default {
  name: 'App',
  components: {
    'el-alert': ElAlert
  },
  methods: {
    doAlertClose() {
      console.log('关闭了窗口')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
