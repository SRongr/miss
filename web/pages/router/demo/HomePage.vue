<template lang="pug">
  .container
    .swiper(v-swiper:mySwiper="swiperOption", @transitionend='onTransitionEnd($event)', @slideTo="slideTo(index, speed, runCallbacks)")
      .swiper-wrapper.direction
        .swiper-slide
          Start(@slideTo="slideToContent", :go-on="goOn")
        .swiper-slide
          Calendar(@slideTo="slideToContent", :go-on="goOn", :ani="sliderIndex === 1")
        .swiper-slide(v-for='(item,index) in contentPageMap')
          //- C17F
          component(:is="item", :ani="sliderIndex === index + 2", @backClick="backClick")
          //- .swiper-slide(v-if='shareInfo')
          //-   Share(:share-no="shareInfo.pageNo", :gender="data.gender")
      .swiper-pagination(style="display: none")
</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import Start from './component/Start'
import Calendar from './component/calendar'
import About from './component/about'
import C17 from './component/C17/C17'
import C0702 from './component/C0702/C0702'
import C0828 from './component/C0828/C0828'
import C1109 from './component/C1109/C1109'
import C1205 from './component/C1205/C1205'
import C1231 from './component/C1231/C1231'
import C0119 from './component/C0119/C0119'
import C0225 from './component/C0225/C0225'
import C0307 from './component/C0307/C0307'
import C0406 from './component/C0406/C0406'
import C0407 from './component/C0407/C0407'
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
export default {
  name: 'homePage',
  components: {
    Calendar,
    About,
    Start,
    C17,
    C0702,
    C0828,
    C1109,
    C1205,
    C1231,
    C0119,
    C0225,
    C0406,
    C0407,
  },
  data() {
    return {
      swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				direction: 'vertical',
				mousewheelControl: true,
				touchRatio: 1,
				effect: 'fade',
				longSwipesRatio: 0.1, // 滑动起效比例
				observer: true,
        observeParents: true,
      },
      goOn: false,
      sliderIndex: 0,
      contentPageMap: [
        // Start,
        // Calendar,
        C17,
        // C17F,
        // C17S,
        C0702,
        C0828,
        C1109,
        C1205,
        C1231,
        C0119,
        C0225,
        C0307,
        C0406,
        C0407,
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    onTransitionEnd (e) {
      this.sliderIndex = this.mySwiper.activeIndex
    },
    slideToContent (index, dalay = 1000, duration = 1000) {
      console.log(index)
      setTimeout( () => {
        this.goOn = false
        this.mySwiper.slideTo(index, duration) 
      }, dalay)
    },
    backClick () {
      console.log(23)
      this.mySwiper.slideTo(1, 2000)
      const timer = setTimeout(() => {
        this.goOn = true
        clearTimeout(timer)
      }, 2000)
    }
  }
}
</script>

<style lang="stylus">
@import '../../../css/base.styl'
  .container, .swiper, .direction, .swiper-slide
    height 100%
  .swiper
    background-color #000000
    .direction
      flex-direction column
      .swiper-slide
        background-color #fff
        background-size 100% 100% 
        color #fff
        transform  translate3d(0,0,0)
        -webkit-overflow-scrolling touch
</style>
