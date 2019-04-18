<template lang="pug">
  .C0225-wrapper
    .photo-wrapper
      Photo.photo(:src="src1")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    //- BackCalendar(@backClick="backClick")
</template>

<script>
import Photo from '../../../common/components/Photo'
import Article from '../../../common/components/Article'
import BackCalendar from '../../../common/components/BackCalendar'
import images from '../images.json'
export default {
  components: {
    Photo,
    Article,
    BackCalendar
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        //  终于踏上这条路了
       '今天的彩蛋 boom~'
      ],
      src1: images.src2,
      articleStyle: {
        fontSize: `${35/75}em`,
        fontWeight: '400'
      }
    }
  },
  methods: {
    backClick () {
      console.log('click')
      this.$emit('backClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../../css/base.styl'
@import '../../../common/css/main.styl'
  .C0225-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    .photo-wrapper
      position absolute
      top rem(200)
      left 50%
      transform translateX(-50%)
      border 1px solid #000000
      border-radius 50%
      // background linear-gradient(circle 100px at center, #f40 10%, green, 10%) 
      background radial-gradient(red 20%, yellow 70%,green 80%,#ffffff)
      width rem(600)
      height rem(600)
      display flex
      justify-content center
      align-items center
      .photo
        // position absolute
        height rem(400)
        width rem(300)
        top rem(50)
        left  rem(50)
        // transform rotate(350deg)
     
    .article-wrapper
      // height 50%
      position absolute
      height rem(150)
      bottom rem(100)
      background-color #000000
</style>






