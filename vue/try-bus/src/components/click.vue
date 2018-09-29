<template>
  <div>
    <a class="click" :attr-index="index"
     @click.stop.prevent="doClick($event)" href="#">点击我</a>
  </div>
</template>
<script>
import Bus from '@/common/bus.js';
export default {
  props: {
    index: Number
  },
  methods: {
    doClick(event) {
      // console.log(event.target);
      this.$emit('global:clickA', event.target.getAttribute('attr-index'));
      // Bus.$emit('getTarget', event.target.getAttribute('attr-index'));
    }
  }
}
</script>
