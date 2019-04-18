<template lang="pug">
  .container
    .swiper(v-swiper:mySwiper="swiperOption", @transitionend='onTransitionEnd($event)', )
      .swiper-wrapper.direction
        .swiper-slide
          Loading(@complete="slideToContent", :resources="resources")
        .swiper-slide
          Start(@slideTo="slideToContent", :ani="sliderIndex === 1")
        .swiper-slide
          Calendar(@slideTo="slideToContent", :ani="sliderIndex === 2")
        .swiper-slide(v-for='(item,index) in contentPageMap')
          component(:is="item", :ani="sliderIndex === index + 3", @backClick="backClick", v-show='sliderIndex === index + 3')
      .swiper-pagination(style="display: none")
      img.control(:src="controlPic", @click="controlMusic", v-if='audioInit')
      audio(src="https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/%E9%99%88%E6%B7%91%E6%A1%A6%20-%20%E6%BB%9A%E6%BB%9A%E7%BA%A2%E5%B0%98.mp3", id="contentAudio")
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
import C0308 from './component/C0308/C0308'
import C0406 from './component/C0406/C0406'
import C0407 from './component/C0407/C0407'
import End from './component/end/End'
import Loading from './Loading'
import images from './images.json'
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
    C0307,
    C0308,
    C0406,
    C0407,
    End,
    Loading,
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
        // allowSlideNext: false,
        // allowSlidePrev: false
      },
      sliderIndex: 0,
      contentPageMap: [
        C17,
        C0702,
        C0828,
        C1109,
        C1205,
        C1231,
        C0119,
        C0225,
        C0307,
        C0308,
        C0406,
        C0407,
        End
      ],
      resourcesArr: [
        require('./images.json'), // homePage,
        require('./component/C17/images.json'), 
        require('./component/C0119/images.json'), 
        require('./component/C0225/images.json'), 
        require('./component/C0307/images.json'), 
        require('./component/C0308/images.json'), 
        require('./component/C0407/images.json'), 
        require('./component/C0702/images.json'), 
        require('./component/C0828/images.json'), 
        require('./component/C1205/images.json'), 
        require('./component/C1231/images.json'),
      ],
      audioInit: false,
      audio: null,
      playing: true,
      images,
      controlPic: images.open,
      resources: null

    }
  },
  mounted() {
    const res = []
    this.resourcesArr.forEach(item => {
      const newArr = Object.values(item)
      res.push(...newArr)
    })
    this.resources = res
  },
  methods: {
    onTransitionEnd (e) {
      this.sliderIndex = this.mySwiper.activeIndex
    },
    slideToContent (index, dalay = 2000, duration = 2000) {
      if (!this.audioInit && index == 2) {
        console.log('lai')
        this.audioInit = true
        this.audio = document.querySelector('#contentAudio')
        this.audio.autoplay = true
        this.audio.loop = 'loop'
        this.audio.play()
      }
      console.log(index, this.mySwiper)
      setTimeout( () => {
        this.goOn = false
        this.mySwiper.allowSlideNext = true
        this.mySwiper.slideTo(index, duration)
        this.mySwiper.allowSlideNext = false
      }, dalay)
    },
    backClick () {
      this.mySwiper.allowSlidePrev = true
      this.mySwiper.slideTo(2, 2000)
      this.mySwiper.allowSlidePrev = false
      const timer = setTimeout(() => {
        clearTimeout(timer)
      }, 2000)
    },
    controlMusic () {
      if (this.playing) {
        this.audio.pause()
        this.controlPic = this.images.close
        this.playing = false
      } else {
        this.audio.play()
        this.controlPic = this.images.open
        this.playing = true
      }
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
    .control
      position fixed
      width  rem(70)
      bottom rem(28)
      right rem(28)
      z-index 1000
    .direction
      flex-direction column
      .swiper-slide
        background-color #fff
        background-size 100% 100% 
        color #fff
        transform  translate3d(0,0,0)
        -webkit-overflow-scrolling touch
</style>
