<template>
  <div id="app">
    <!-- <login /> -->
    <!-- <markdown /> -->
    <!-- <dynamic-table /> -->
    <complex-table />
  </div>
</template>

<script>
import ComplexTable from '@/views/ComplexTable'
// import DynamicTable from '@/views/DynamicTable'
// import Markdown from '@/views/Markdown'
// import Login from '@/views/Login'
// import TinymceDemo from '@/views/TinymceDemo'
export default {
  name: 'App',
  components: {
    ComplexTable
    // 'dynamic-table': DynamicTable
    // markdown: Markdown
    // Login
    // 'tinymce-demo': TinymceDemo
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
