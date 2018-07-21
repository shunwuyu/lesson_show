<template>
<div>
  <template v-if="type !== 'textarea'">
    <input ref="input" class="el-input__inner" @input="handleInput"/>
  </template>
</div>
</template>
<script>
export default {
  name: 'ElInput',
  componentName: 'ElInput',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      // this.setCurrentValue(value);
      // if (this.isOnComposition) return;
      this.$emit('input', value);
    }
  }
}
</script>