<template lang="pug">
  .swiper(v-swiper:mySwiper="swiperOption", @transitionend='onTransitionEnd($event)', @slideTo="slideTo(index, speed, runCallbacks)")
    .swiper-wrapper.direction
      .swiper-slide(v-for='(item,index) in contentPageMap', v-if='ani')
        component(:is="item", :ani="sliderIndex === index")
    .bottom(v-if="sliderIndex === contentPageMap.length - 1")
      BackCalendar(@backClick="backClick")
</template>


<script>
import C0702F from './components/C0702F';
import C0702S from './components/C0702S'
import C0702T from './components/C0702T'
import C0702TH from './components/C0702TH'
import BackCalendar from '../../common/components/BackCalendar'
export default {
  components: {
    C0702F,
    C0702S,
    C0702T,
    C0702TH,
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
        C0702F,
        C0702S,
        C0702T,
        C0702TH
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
