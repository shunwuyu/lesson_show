<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-body">
      <h1 class="text-center">{{ time }}小时</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() { //组件自己的数据
    return {
      // time: '3'
    }
  },
  // connect()
  computed: {
    time() { //计算
      return this.$store.state.totalTime;
    }
  },
}
</script>
<style>
</style>