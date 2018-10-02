<template>
<div class="shoplist_container">
  <ul v-load-more="loaderMore" v-if="shopListArr.length" type="1">
    <router-link :to="{path: 'shop', query: {geohash, id: item.id}}"
     v-for="item in shopListArr"
     tag="li" :key="item.id" class="shop_li">
      <section>
        <img :src="'//elm.cangdu.org/img/'+item.image_path" class="shop_img">
      </section>
      <hgroup class="shop_right">
        <header class="shop_detail_header">
          <h4 class="shop_title ellipsi"
           :class="item.is_premium? 'premium': ''">{{item.name}}</h4>
           <ul class="shop_detail_ul">
             <li v-for="item in item.supports" :key="item.id" class="supports">{{item.icon_name}}</li>
           </ul>
        </header>
        <h5 class="rating_order_num">
          <section class="rating_order_num_left">
					  <section class="rating_section">
              <rating-star :rating='item.rating'></rating-star>
              <span class="rating_num">{{item.rating}}</span>
            </section>
					</section>
          <section class="order_section">
            月售{{item.recent_order_num}}单
          </section>
          <section class="rating_order_num_right">
            <span class="delivery_style delivery_left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
            <span class="delivery_style delivery_right">准时达</span>
          </section>
        </h5>
        <h5 class="fee_distance">
						<p class="fee">
							¥{{item.float_minimum_order_amount}}起送
							<span class="segmentation">/</span>
							{{item.piecewise_agent_fee.tips}}
						</p>
						<p class="distance_time">
							<span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}
								<span class="segmentation">/</span>
							</span>
							<span v-else>{{item.distance}}</span>
							<span class="segmentation">/</span>
							<span class="order_time">{{item.order_lead_time}}</span>
						</p>
					</h5>
      </hgroup>
    </router-link>
  </ul>
  <ul v-else class="animation_opactiy">
    <li class="list_back_li"
     v-for="item in 10"  :key="item">
      <img src="../../assets/images/shopback.svg" alt=""  class="list_back_svg">
    </li>
  </ul>
  <p class="empty_data" v-if="touchend">没有更多了</p>
  <aside class="return_top" @click="backTop" v-if="showBackStatus">
    <svg class="back_top_svg">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backtop"></use>
    </svg>
  </aside>
  <transition name="loading">
    <loading v-show="showLoading"/>
  </transition>
</div>
</template>
<script>
import { mapState } from 'vuex'
import { shopList } from '@/service/getData'
import ratingStar from './ratingStar'
import loading from './loading'
import {showBack, animate} from '@/config/mUtils'
import {loadMore, getImgPath} from './mixin'
export default {
  data () {
    return {
      shopListArr: [],
      offset: 0,
      showLoading: true,
      'touchend': false,
      showBackStatus: false
    }
  },
  props: ['restaurantCategoryId', 'geohash'],
  mixins: [loadMore],
  computed: {
    ...mapState([
      'latitude',
      'longitude',
    ])
  },
  mounted () {
    this.initData();
  },
  methods: {
    async loaderMore () {
      console.log('sss');
      if (this.touchend) {
        return
      }
      if (this.preventRepeatReuqest) {
        return
      }
      this.showLoading = true
      this.preventRepeatReuqest = true
      this.offset += 20;
      let res = await shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId);
      this.hideLoading();
      this.shopListArr = [...this.shopListArr, ...res];
      if (res.length < 20) {
				this.touchend = true;
				return
      }
      this.preventRepeatReuqest = false;
    },
    backTop () {
      animate(document.documentElement, {scrollTop: '0'}, 400,'ease-out');
    },
    async initData () {
      // console.log(this.latitude, this.longitude, this.offset,
      //  this.restaurantCategoryId)
      let res = await shopList(this.latitude, this.longitude, this.offset,
       this.restaurantCategoryId)
      this.shopListArr = [...res]
      if (res.length < 20) {
        this.touchend = true
      }
      this.hideLoading();
      showBack(status => {
        // console.log(status);
        this.showBackStatus = status;
      })
    },
    hideLoading () {
      this.showLoading = false
    }
  },
  components: {
    'rating-star': ratingStar,
    loading
  }
}
</script>
<style lang="stylus">
@import '../../style/mixin'
.shoplist_container
  background-color #fff
  // margin-bottom 2rem
.shop_li
  display flex
  border-bottom 0.025rem solid #f1f1f1
  padding 0.7rem 0.4rem

.shop_img
  wh(2.7rem, 2.7rem)

.shop_right
	flex auto

.shop_detail_header
  fj()
  align-items center
  .shop_title
    width 8.5rem
    color #333
    padding-top .01rem
    font(0.65rem, 0.65rem, 'PingFangSC-Regular')
    font-weight: 700
  .premium::before
    content '品牌'
    display inline-block
    font-size 0.5rem
    line-height .6rem
    color #333
    background-color #ffd930
    padding 0 0.1rem
    border-radius 0.1rem
    margin-right 0.2rem
  .shop_detail_ul
    display flex
    transform scale(.8)
    margin-right -0.3rem
    .supports
      sc(0.5rem, #999)
      border 0.025rem solid #f1f1f1
      padding 0 0.04rem
      border-radius 0.08rem
      margin-left 0.05rem
.rating_order_num
  fj(space-between)
  height 0.6rem
  margin-top 0.52rem
.rating_order_num_left
  fj(flex-start)
.rating_section
  display flex
.rating_num
  sc(0.4rem, #ff6000)
  margin 0 0.2rem
.order_section
  transform scale(.8)
  margin-left -0.2rem
  sc(0.4rem, #666)

.rating_order_num_right
  display flex
  align-items center
  transform scale(.7)
  min-width 5rem
  justify-content flex-end
  margin-right -0.8rem
.delivery_style
  font-size 0.4rem
  padding 0.04rem 0.08rem 0
  border-radius 0.08rem
  margin-left 0.08rem
  border 1px
.delivery_left
  color #fff
  background-color $blue
  border 0.025rem solid $blue
.delivery_right
  color $blue
  border 0.025rem solid $blue

.fee_distance
  margin-top 0.52rem
  fj()
  sc(0.5rem, #333)
  .fee
    transform scale(.9)
    sc(0.5rem, #666)
.distance_time
  transform scale(.9)
  span
    color #999
    .order_time
      color $blue
    .segmentation
      color #ccc

.return_top
  position fixed
  bottom 3rem
  right 1rem
  .back_top_svg
    wh(2rem, 2rem)

.loading-enter-active, .loading-leave-active
  transition opacity 1s
.loading-enter, .loading-leave-active
  opacity 0
.loader_more
  font(0.6rem, 3)
  text-align center
  color #999
.empty_data
  sc(0.5rem, #666)
  text-align center
  line-height 2rem
.return_top
  position fixed
  bottom 3rem
  right 1rem
  .back_top_svg
    wh(2rem, 2rem)
</style>
