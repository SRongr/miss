<template lang="pug">
  .swiper(v-swiper:mySwiper="swiperOption", @transitionend='onTransitionEnd($event)', @slideTo="slideTo(index, speed, runCallbacks)")
    .swiper-wrapper.direction
      .swiper-slide(v-for='(item,index) in contentPageMap', v-if='ani')
        component(:is="item", :ani="sliderIndex === index")
    .bottom(v-if="sliderIndex === contentPageMap.length - 1")
      BackCalendar(@backClick="backClick")
</template>


<script>
import F from './components/F';
import S from './components/S'
import T from './components/T'
import TH from './components/TH'
import BackCalendar from '../../common/components/BackCalendar'
export default {
  components: {
    F,
    S,
    T,
    TH,
    BackCalendar
  },
  props: [
    'ani'
  ],
  watch: {
    ani(value) {
      console.log(value)
    }
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
      contentPageMap: [
        F,
        S,
        T,
        TH
      ],
      sliderIndex: 0
    }
  },
  methods: {
    onTransitionEnd() {
      this.sliderIndex = this.mySwiper.activeIndex
    },
    backClick () {
      console.log('click')
      this.$emit('backClick')
    }
  },
}
</script>

<style lang="stylus">
@import '../../../../../css/base.styl'
@import '../../common/css/main.styl'
</style>
