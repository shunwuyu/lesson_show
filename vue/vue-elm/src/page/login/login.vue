<template>
<div class="loginContainer">
  <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true">
      <!-- <div slot="changeLogin" class="change_login" @click="changeLoginWay">{{loginWay? "密码登录":"短信登录"}}</div> -->
  </head-top>
  <form class="loginForm" >
    <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
    </section>
    <section class="input_container">
        <input v-if="!showPassword" type="password" placeholder="密码"  v-model="password">
        <input v-else type="text" placeholder="密码"  v-model="passWord">
        <div class="button_switch" :class="{change_to_text: showPassword}" @click="changePassWordType">
            <div class="circle_button" :class="{trans_to_right: showPassword}" ></div>
            <span>abc</span>
            <span>...</span>
        </div>
    </section>
    <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <div class="img_change_img">
            <img v-show="captchaCodeImg" :src="captchaCodeImg">
            <div class="change_img" @click="getCaptchaCode">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </div>
    </section>
  </form>
  <p class="login_tips">
      温馨提示：未注册过的账号，登录时将自动注册
  </p>
  <p class="login_tips">
      注册过的用户可凭账号密码登录
  </p>
  <div class="login_container" @click="mobileLogin">登录</div>
  <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
</div>
</template>
<script>
import { getcaptchas, accountLogin } from '../../service/getData'
import headerTop from '@/components/header/head'
import alertTip from '@/components/common/alertTip'
export default {
  data () {
    return {
      loginWay: false,
      alertText:'',
      userAccount: null,
      password: null,
      codeNumber: null,
      showPassword: false,
      captchaCodeImg: null,
      showAlert: false
    }
  },
  components: {
    'head-top': headerTop,
    'alert-tip': alertTip
  },
  methods: {
    closeTip () {
      this.showAlert = false
    },
    async mobileLogin () {
      if (!this.userAccount) {
        this.showAlert = true
        this.alertText = '请输入手机号/邮箱/用户名'
        return
      } else if (!this.password) {
        this.showAlert = true
        this.alertText = '请输入密码'
        return
      } else if (!this.codeNumber) {
        this.showAlert = true;
        this.alertText = '请输入验证码';
        return
      }
      // console.log(this.userAccount, this.password, this.codeNumber)
      this.userInfo = await accountLogin(this.userAccount, this.password, this.codeNumber);
      console.log(this.userInfo);
    },
    changePassWordType() {
      this.showPassword = !this.showPassword
    },
    async getCaptchaCode() {
      let res = await getcaptchas();
      res.json()
      .then(data => {
        this.captchaCodeImg = data.code
      })
      // this.captchaCodeImg = res.code
    }
  },
  mounted () {
    this.getCaptchaCode();
  }
}
</script>
<style lang="stylus">
@import '../../style/mixin';
.loginContainer
  padding-top 1.95rem
  p, span, input
    font-family Helvetica Neue,Tahoma,Arial
.change_login
  position absolute
  ct()
  right 0.75rem
  sc(.7rem, #fff)
.loginForm
  background-color #fff
  margin-top 0.6rem
  .input_container
    fj()
    padding 0.6rem 0.8rem
    border-bottom 1px solid #f1f1f1
    input
      sc(.7rem, #666)
    button
      sc(.65rem, #fff)
      font-family Helvetica Neue,Tahoma,Arial
      padding 0.28rem 0.4rem
      border 1px
      border-radius .15rem
    .right_phone_number
        background-color #4cd964
  .phone_number
    padding 0.3rem 0.8rem
  .captcha_code_container
    height 2.2rem
    .img_change_img
      display flex
      align-items center
      img
        wh(3.5rem, 1.5rem)
        margin-right 0.2em
      .change_img
        display flex
        flex-direction column
        flex-wrap wrap
        width 2rem
        justify-content center
        p
          sc(.55rem, #666)
        p:nth-of-type(2)
          color #3b95e9
          margin-top 0.2rem

.login_tips
  sc(.5rem, red)
  padding 0.4rem 0.6rem
  line-height 0.5rem
  a
    color #3b95e9
.login_container
  margin 0 .5rem 1rem
  sc(.7rem, #fff)
  background-color #4cd964
  padding 0.5rem 0
  border 1px
  border-radius .15rem
  text-align center
.button_switch
  background-color: #ccc
  fj(center)
  wh(2rem, .7rem)
  padding 0 .2rem
  border 1px
  border-radius .5rem
  position relative
  .circle_button
      transition all .3s
      position absolute
      top -0.2rem
      z-index 1
      left -0.3rem
      wh(1.2rem, 1.2rem)
      box-shadow 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1)
      background-color #f1f1f1
      border-radius 50%
    .trans_to_right
      transform translateX(1.3rem)
    span
      sc(.45rem, #fff)
      transform translateY(.05rem)
      line-height .6rem
    span:nth-of-type(2)
      transform translateY(-.08rem)

.change_to_text
  background-color #4cd964
  sc(.6rem, #3b95e9)
  margin-right 0.3rem
</style>

