<template>
  <div id="app">
    <main-component />
    <p>FullName:{{fullName}}</p>
    <p>FirstName: <input type="text" v-model="firstName"></p>
    <p>obj.a {{obj.a}}</p>
    <p>ob.a: <input type="text" v-model="obj.a"></p>
  </div>
</template>

<script>
import Main from './components/main'

export default {
  name: 'App',
  data () {
    return {
      obj: {
        a: 123
      },
      firstName: '凯',
      lastName: '曾',
      fullName: ''
    }
  },
  // watch: {
  //   firstName(newName, oldName) {
  //     this.fullName = newName + ' ' + this.lastName;
  //   }
  // },
  // watch: {
  //   firstName: {
  //     handler(newName, oldName) {
  //       this.fullName = newName + ' ' + this.lastName
  //     },
  //     immediate: true
  //   }
  // },
  watch: {
    obj: {
      handler(newName, oldName) {
        console.log('obj.a changed');
      },
      immediate: true,
      deep: true
    }
  },
  // computed: {
  //   fullName() {
  //     return this.firstName + ' ' + this.lastName
  //   }
  // },
  components: {
    'main-component': Main
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
