<template lang="pug">
  .C0307F-wrapper
    img.bg(:src="src2")
    Photo.photo(:src="src")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
    //- BackCalendar(@backClick="backClick")
</template>

<script>
import Photo from '../../../common/components/Photo'
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import BackCalendar from '../../../common/components/BackCalendar'
import images from '../images.json'
export default {
  components: {
    Photo,
    Article,
    Arrow,
    BackCalendar
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        // 女神节日快乐！
       '当当当当， 女神节快乐！！！ 这个盒子可是我自己做的哦。里面的结构可是用心想了的！放我准备的东西刚刚好！当时前几天还惹你生气了。嘿嘿。里面还有一封道歉信，右下角附上当时画的表情包原图，还祝福了我们的将来。'
      ],
      src: images.src1,
      src2: images.src3,
      articleStyle: {
        fontSize: `${50/75}em`,
        fontWeight: '700',
        color: '#ff0087',
        fontFamily: 'cursive',
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
  .C0307F-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    background-size cover
    background-repeat no-repeat
    .bg
      width 100%
      height 100%
    .photo
      position absolute
      bottom 0
      right 0
      height 35%
      width 40%
    .article-wrapper
      position absolute
      top 0 
      left 0
      bottom 0 
      right 0

</style>






