<template lang="pug">
  .swiper(v-swiper:mySwiper="swiperOption", @transitionend='onTransitionEnd($event)', @slideTo="slideTo(index, speed, runCallbacks)")
    .swiper-wrapper.direction
      .swiper-slide(v-for='(item,index) in contentPageMap', v-if='ani')
        component(:is="item", :ani="sliderIndex === index")
    .bottom(v-if="sliderIndex === contentPageMap.length - 1")
      .end 未完待续
      //- BackCalendar(@backClick="backClick")
</template>


<script>
import End1 from './components/end1'
import End2 from './components/end2'
import BackCalendar from '../../common/components/BackCalendar'
export default {
  components: {
    End1,
    End2,
    BackCalendar,
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
        End1,
        End2,
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

<style lang="stylus" scoped>
@import '../../../../../css/base.styl'
@import '../../common/css/main.styl'
  .end  
    position absolute
    bottom rem(20)
    left rem(20)
    height rem(50)
    width rem(200)
    font-size rem(40)
    background-color transparentify
    flexC()
    justify-content space-between
    transX(backX, 0%, -10%)
    animation backX linear 1s alternate infinite
    opacity .5
    z-index 1
</style>
