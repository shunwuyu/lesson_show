<template>
<div class="el-form-item">
  <label class="el-form-item__label" :style="labelStyle"
   v-if="label||$slots.label">
    <slot name="label">{{label}}</slot>
  </label>
  <div class="el-form-item__content">
    <slot />
  </div>
</div>
</template>
<script>
import emitter from '@/mixins/emitter';

export default {
  data () {
    return {
      validateDisabled: false
    }
  },
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    rules: [Object, Array],
  },
  mixins: [emitter],
  computed: {
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        if (parentName === 'ElFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    labelStyle () {
      const ret = {};
      // console.log(this.form.labelPosition)
      if (this.form.labelPosition === 'top') return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    }
  },
  mounted () {
    // if (this.prop) {
      console.log('aaa');
      this.dispatch('ElForm', 'el.form.addField', [this]);
    // }
  },
  methods: {
    validate (trigger, callback) {
      this.validateDisabled = false
      const rules = this.getRules();
     
      const item_rules = rules[this.prop];
      //  console.log(item_rules);
      const value = this.form.model.name;
      item_rules.forEach(rule => {
        if (rule.required && !value) {
          alert(rule.message);
        }
      })
    },
    getRules () {
        let formRules = this.form.rules;
        return formRules
    }
  }
} 
</script>