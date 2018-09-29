<template>
  <header id='head_top'>
    <slot name="logo"/>
    <slot name="search"></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <router-link class="head_login" :to="userInfo?'/profile':'/login'" v-if='signinUp'>
      <svg class="user_avatar" v-if="userInfo"></svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="changecity"></slot>
    <slot name="msite-title"></slot>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'head-top',
  props: ['goBack', 'signinUp', 'headTitle'],
  mounted () {

  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/mixin'

#head_top
  background-color $blue
  position fixed
  z-index 100
  left 0
  top 0
  wh(100%, 1.95rem)

.head_goback
  left 0.4em
  wh(0.6rem, 1rem)
  line-height 2.2rem
  margin-left .4rem

.head_login
  right 0.55rem
  sc(0.65rem, #fff)
  ct()
  .login_span
    color: #fff

.title_head
  center();
  width 50%
  color #ffffff
  text-align center
  .title_text
      sc(0.8rem, #fff)
      text-align center
      font-weight bold
</style>
