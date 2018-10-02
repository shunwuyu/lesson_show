<template>
<div>
  <head-top>
    <router-link to="/search/geohash" class="link_search" slot="search">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"/>
        <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </router-link>
    <router-link to="/home" slot="msite-title" class="msite_title">
      <span class="title_text ellipsis">{{ msiteTitle }}</span>
    </router-link>
  </head-top>
  <nav class="msite_nav">
    <div class="swiper-container" v-if="foodTypes.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
          <router-link :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
            <figure>
              <img :src="imgBaseUrl + foodItem.image_url">
              <figcaption>{{foodItem.title}}</figcaption>
            </figure>
          </router-link>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <img src="../../assets/images/fl.svg" class="fl_back animation_opactiy" v-else>
  </nav>
  <div class="shop_list_container">
    <header class="shop_header">
      <svg class="shop_icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
      </svg>
      <span class="shop_header_title">附近商家</span>
    </header>
    <shop-list v-if="hasGetData" :geohash="geohash"></shop-list>

  </div>
</div>
</template>
<script>
import headTop from '@/components/header/head'
import footGuide from '@/components/footer/footGuide'
import { msiteFoodTypes, cityGuess, msiteAddress } from '@/service/getData'
import shopList from '@/components/common/shopList'
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      geohash: '',
      msiteTitle: '请选择地址...',
      foodTypes: [],
      imgBaseUrl: 'https://fuss10.elemecdn.com',
      hasGetData: false
    }
  },
  async beforeMount () {
    if (!this.$route.query.geohash) {
      const address = await cityGuess()
      this.geohash = address.latitude + ',' + address.longitude
    } else {
      this.geohash = this.$route.query.geohash
      console.log(this.geohash)
    }
    this.SAVE_GEOHASH(this.geohash);
    let res = await msiteAddress(this.geohash);
    this.msiteTitle = res.name
    this.RECORD_ADDRESS(res);
    this.hasGetData = true;
  },
  async mounted () {
    const data = await msiteFoodTypes(this.geohash)
    // console.log(data);
    let resLength = data.length;
    let resArr = [...data];
    let foodArr = [];
    for (let i = 0, j = 0; i < resLength; i += 8, j++) {
      foodArr[j] = resArr.splice(0, 8);
    }
    this.foodTypes = foodArr
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true
      });
    })
  },
  methods: {
    ...mapMutations([
      'SAVE_GEOHASH',
      'RECORD_ADDRESS'
    ]),
    getCategoryId (url) {
      let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id
      }else{
        return ''
      }
    }
  },
  components: {
    'head-top': headTop,
    'shop-list': shopList,
    'foot-guide': footGuide
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/mixin';

.link_search
  left 0.8rem
  wh(.9rem, .9rem)
  ct()

.msite_title
  center()
  width 50%
  color #fff
  text-align center
  margin-left -0.5rem
  .title_text
    sc(0.8rem, #fff);
    text-align: center;
    display: block;

.msite_nav
  padding-top 2.1rem
  background-color #fff
  border-bottom 0.025rem solid $bc
  height 10.6rem
  .swiper-container
    wh(100%, auto)
    padding-bottom 0.6rem
    .swiper-pagination
      bottom 0.2rem
    .fl_back
      wh(100%, 100%)

.food_types_container
  display flex
  flex-wrap wrap
  .link_to_food
    width 25%
    padding 0.3rem 0rem
    fj(center)
    figure
      img
        margin-bottom 0.3rem
        wh(1.8rem, 1.8rem)
      figcaption
        text-align center
        sc(0.55rem, #666)

.shop_list_container
		margin-top .4rem
		border-top 0.025rem solid $bc
		background-color #fff
		.shop_header
			.shop_icon
				fill #999
				margin-left 0.6rem
				vertical-align middle
				wh(0.6rem, 0.6rem)
			.shop_header_title
				color: #999
				font(0.55rem, 1.6rem)




</style>

