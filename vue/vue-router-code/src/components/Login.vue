<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">You need to login First</p>
    <form @submit.prevent="login">
      <label>
        <input placeholder="email" v-model="email">
      </label>
      <label>
        <input type="password" placeholder="password" v-model="pass">(hint: password1)
      </label>
      <button type="submit">Login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>
<script>
import auth from '../auth'
export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: 'password1',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, (loggedIn) => {
        console.log(loggedIn, this.$route.query.redirect)
        if (!loggedIn) {
          this.error = true
        } else {
          console.log(this.$router)
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>
<style>

</style>

