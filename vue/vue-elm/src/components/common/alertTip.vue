<template>
 <div class="alet_container">
  <section class="tip_text_container">
    <div class="tip_icon">
        <span></span>
        <span></span>
    </div>
    <p class="tip_text">{{alertText}}</p>
    <div class="confrim" @click="closeTip">确认</div>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      positionY: 0,
      timer: null,
    }
  },
  props: ['alertText'],
  methods: {
    closeTip() {
      this.$emit('closeTip')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/mixin'
@keyframes tipMove
  0%
    transform scale(1)
  35%
    transform scale(.8)
  70%
    transform scale(1.1)
  100%
    transform scale(1)
.alet_container
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 200
.tip_text_container
  position absolute
  top 50%
  left 50%
  margin-top -6rem
  margin-left -6rem
  width 12rem
  animation tipMove .4s
  background-color rgba(255,255,255,1)
  border 1px
  padding-top 0.6rem
  fj(center)
  align-items center
  flex-direction column
  border 1px
  border-radius 0.25rem
  .tip_icon
    wh(3rem, 3rem)
    border 0.15rem solid #f8cb86
    border-radius 50%
    fj(center)
    flex-direction column
    aligin-items center
    span:nth-of-type(1)
      wh(.12rem, 1.5rem)
      background-color #f8cb86
    span
      wh(.2rem, .2rem)
      border 1px
      border-radius 50%
      margin-top 0.2rem
      background-color #f8cb86
  .tip_text
    sc(.7rem, #333)
    line-height 0.9rem
    text-align center
    margin-top 0.8rem
    padding 0 .4rem
  .confirm
    sc(.8rem, #fff)
    font-weight bold
    margin-top 0.8rem
    background-color #4cd964
    width 100%
    text-align center
    line-height 1.8rem
    border 1px
    border-bottom-left-radius .25rem
    border-bottom-right-radius .25rem


</style>
