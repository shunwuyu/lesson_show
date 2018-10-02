<template>
<div class="fixed-wrapper">
  <mt-cell class="music-cell-song-fixed">
    <router-link tag="div"
					 class="song-cover"
					 :to="{name: 'playing'}"
					 @touchstart.native="swipeStart"
					 @touchmove.native="swipeMove"
					 @touchend.native="swipeEnd">
		  <img :src="ablumImgUrl"
		  	   class="song-album-img"
		  	   :class="{'spin-slow': playingState != 'pause'}">
		  <div class="name-desc">
		  	<!-- <p>{{ songMsg.data.songname }}</p> -->
		  </div>
		</router-link>
  </mt-cell>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('playing', ['songState']),
    playingState () {
      return this.songState.playingState
    },
    ablumImgUrl () {
      return {

      }
    }
  },
  methods: {
    swipeStart (e) {

    },
    swipeMove (e) {

    },
    swipeEnd () {

    }
  }
}
</script>
<style>

</style>
