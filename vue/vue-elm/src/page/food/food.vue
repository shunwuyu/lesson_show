<template>
  <div class="food_container">
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <section class="sort_contaner">
      <div class="sort_item" :class="{choose_type:sortBy === 'food'}">
        <div class="sort_item_container" @click="chooseType('food')">
          <div class="sort_item_border">
            <span :class="{category_title: sortBy == 'food'}">{{foodTitle}}</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
      </div>
      <transition name="showList" v-show="category">
        <section v-show="sortBy == 'food'" class="category_container sort_detail_type">
          <section class="category_left">
            <ul>
              <!-- <li v-for="(item, index) in category" :key="index" class="category_left_li" :class="{category_active:restaurant_category_id == item.id}" @click="selectCategoryName(item.id, index)">
                <section>
                  <img :src="getImgPath(item.image_url)" v-if="index" class="category_icon">
                  <span>{{item.name}}</span>
                </section>
                <section>
                  <span class="category_count">{{item.count}}</span>
                  <svg v-if="index" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" class="category_arrow" >
                    <path d="M0 0 L6 4 L0 8"  stroke="#bbb" stroke-width="1" fill="none"/>
                  </svg>
                </section>
              </li> -->
            </ul>
          </section>
        </section>
      </transition>
      <div class="sort_item" :class="{choose_type:sortBy == 'sort'}">
        <div class="sort_item_container" @click="chooseType('sort')">
          <div class="sort_item_border">
            <span :class="{category_title: sortBy == 'sort'}">排序</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="sort_item" :class="{choose_type:sortBy == 'activity'}">
        <div class="sort_item_container" @click="chooseType('activity')">
          <span :class="{category_title: sortBy == 'activity'}">筛选</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import headTop from '@/components/header/head'
import { mapState } from 'vuex'
import { foodCategory } from '@/service/getData'
import { getImgPath } from '@/components/common/mixin'
export default {
  data () {
    return {
      headTitle: 'gggg'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../style/mixin';
.food_container
  padding-top 3.6rem
.sort_contaner
  background-color: #fff;
  border-bottom: .025rem solid #f1f1f1;
  position: fixed;
  top: 1.95rem;
  right: 0;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  z-index: 13;
  box-sizing: border-box;
  .sort_item
    font-size: .55rem;
    color: #444;
    width: 33.3%;
    height: 1.6rem;
    text-align: center;
    line-height: 1rem;
    .sort_item_container
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 14;
      background-color: #fff;
      box-sizing: border-box;
      padding-top: .3rem;
    .sort_item_border
      height: 1rem;
      border-right: .025rem solid #e4e4e4;
      .sort_icon
        vertical-align: middle;
        transition: all .3s;
        fill: #666;
</style>

