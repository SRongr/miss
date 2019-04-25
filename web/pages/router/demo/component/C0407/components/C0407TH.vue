<template lang="pug">
  .C0407TH-wrapper
    Photo.photo(:src="src")
    Essay.article-wrapper(:calendar-text="calendarText1", v-if='ani', :article-style="articleStyle")
    Essay.article-wrapper2(:calendar-text="calendarText2", v-if='ani', :article-style="articleStyle2")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Essay from '../../../common/components/Essay'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
import images from '../images.json'
export default {
  components: {
    Essay,
    Arrow,
    Photo,
  },
  props: ['ani'],
  data() {
    return {
      calendarText1: [
        // 最后一天
       '看什么看呀，有本事出来咬我啊'
      ],
      calendarText2: [
        '嘿嘿，我可爱的女神，说你呢'
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
        fontWeight: '700',
        // color: '#ff0087',
        // fontFamily: 'cursive',
      },
      articleStyle2: {
        fontSize: `${20/75}em`,
        fontWeight: '400',
      },
      src: images.src3
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
  .C0407TH-wrapper
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
      right 0
      width 100%
      height rem(500)
    .article-wrapper
      position absolute
      top rem(500)
      left 0
      right 0
      bottom 0
      height rem(500)
    .article-wrapper2
      position absolute
      top rem(1000)
      left 0
      right 0
      bottom 0
      height rem(100)

</style>






