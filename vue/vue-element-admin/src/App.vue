<template>
  <div id="app">
    <!-- <login /> -->
    <markdown />
  </div>
</template>

<script>
import Markdown from '@/views/Markdown'
// import Login from '@/views/Login'
// import TinymceDemo from '@/views/TinymceDemo'
export default {
  name: 'App',
  components: {
    markdown: Markdown
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
