<template>
<form class="el-form" :class="[
labelPosition ? 'el-form--label-' + labelPosition : '', {'el-form--inline': inline}]"> 
  <slot />
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
    model: Object,
    inline: Boolean,
    labelPosition: String,
    labelWidth: String,
    rules: Object
  },
  created () {
    this.$on('el.form.addField', (field) => {
      if (field) {
        this.fields.push(field);
      }
    })
  },
  methods: {
    validate (callback) {
      if (!this.model) {
        console.wran('[Element Warn][Form]model is required for validate to work!');
        return;
      }

      let valid = true;
      let count = 0;
  
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      let invalidFields = {};
      this.fields.forEach(field => {
        // console.log(field);
        field.validate('', (message, field) => {
          if (message) {
            valid = false;
          }
          invalidFields  = Object.assign({}, invalidFields, field);
          if (typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid, invalidFields);
          }
        })
      })
    }
  }
}
</script>