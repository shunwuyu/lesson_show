<template>
<div>
  <head-top signin-up='home'>
    <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
  </head-top>
  <nav class="city_nav">
    <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
    </div>
    <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
    </router-link>
  </nav>
  <section id="hot_city_container">
    <h4 class="city_title">热门城市</h4>
    <ul class="cityListul clear">
      <router-link :to="'/city/'+item.id" :key="item.id" tag="li" v-for="item in hotcity">
      {{item.name}}
      </router-link>
    </ul>
  </section>
</div>
</template>
<script>
import headTop from '@/components/header/head'
import { cityGuess, hotcity } from '@/service/getData'

export default {
  async mounted() {
    const data = await cityGuess()
    this.guessCity = data.name;
    this.guessCityid = data.id;

    // console.log(hotcity);
    hotcity()
    .then(res => res.json())
    .then(data => {
      this.hotcity = data
      // console.log(data)
    })
    // hotcity().then(res => {
    //   this.hotcity = res
    // })
  },
  data() {
    return {
      guessCityid: '123',
      guessCity: '南昌',
      hotcity: []
    }
  },
  components: {
    headTop
  },
  methods: {
    reload () {

    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/mixin.styl'
.head_logo
  left 0.4em
  font-weight 400
  sc(0.7rem, #fff)
  wh(2.3rem, 0.7rem)
  ct()

.city_nav
  padding-top 2.35rem
  border-top 1px solid $bc
  background-color #fff
  margin-bottom 0.4rem

  .city_tip
    fj()
    line-height 1.45rem
    padding 0 0.45rem
    span:nth-of-type(1)
      sc(0.55rem, #666)
    span:nth-of-type(2)
      font-weight 900
      sc(0.475rem, #9f9f9f)
  .guess_city
    fj()
    align-items center
    height 1.8rem
    padding 0 0.45rem
    border-top 1px solid $bc
    border-bottom 2px solid $bc
    font(0.75rem, 1.8rem)
    span:nth-of-type(1)
      color $blue
    .arrow_right
      wh(.6rem, .6rem)
      fill #999

#hot_city_container
  background-color #fff
  margin-bottom 0.4em
  .cityListul
    li
      float left
      text-align center
      color $blue
      border-bottom 0.025rem solid $bc
      border-right 0.025rem solid $bc
      wh(25%, 1.75rem)
      font(0.6rem, 1.75rem)
    li:nth-of-type(4n)
      border-right none
  .city_title
    color #666
    font-weight 400
    text-indent 0.45rem
    border-top 2px solid $bc
    border-bottom 1px solid $bc
    font(0.55rem, 1.45rem, 'Helvetica Neue')
    span
      sc(0.475rem, #999)

</style>
