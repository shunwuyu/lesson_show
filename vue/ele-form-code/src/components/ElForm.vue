<template>
<form class="el-form"
:class="[
labelPosition? 'el-form--label-' + labelPosition: '',
{'el-form--inline': inline}]">
  <slot></slot>
</form>
</template>
<script>
export default {
  name: 'ElForm',
  componentName: 'ElForm',
  data () {
    return {
      fields: []
    }
  },
  props: {
    labelPosition: String,
    inline: Boolean,
    model: Object,
    rules: Object
  },
  methods: {
    validate () {
      this.fields.forEach(field => {
        field.validate('', (message, field) => {
          
        })
      })
    }
  },
  // 生命周期
  created () {
    this.$on('el.form.addField', (field) => {
      console.log(field)
      this.fields.push(field);
    });
  }
}
</script>