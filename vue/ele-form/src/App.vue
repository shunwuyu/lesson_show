<template>
  <div id="app">
    <el-form :rules="rules" label-position="left" label-width="80px" :model="activity" ref="ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-form-input v-model="activity.name"/>
      </el-form-item>
      <a @click.prevent="submitForm('ruleForm')">立即创建</a>
    </el-form>
  </div>
</template>

<script>
import ElForm from '@/components/ElForm.vue'
import ElFormItem from '@/components/ElFormItem.vue'
import ElFormInput from '@/components/ElFormInput.vue'
export default {
  name: 'App',
  data () {
    return {
      activity: {
        name: ''
      },
      rules: {
        name: [
          {
            required: true, 
            message: '请输入活动名称'
          },
        ]
      }
    }
  },
  components: {
    ElForm,
    ElFormItem,
    ElFormInput
  },
  methods: {
    submitForm(formName) {
      // console.log('fdfdf')
      this.$refs[formName].validate((valid) => {
        console.log(valid);
      })
    }
  }
}
</script>

<style>
</style>
