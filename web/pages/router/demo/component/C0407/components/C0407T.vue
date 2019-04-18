<template lang="pug">
  .C0407T-wrapper
    Photo.photo(:src="src1")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
import images from '../images.json'
export default {
  components: {
    Article,
    Arrow,
    Photo,
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        // 最后一天
       '刚开始的时候，拍了这张照片。我想等各回各家之后，好好的向我哥们秀一下，今天是我和我女神出来了。 这顿饭吃的好难受。'
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
        fontWeight: '700',
        // color: '#ff0087',
        // fontFamily: 'cursive',
      },
      src1: images.src2,
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
  .C0407T-wrapper
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
      height rem(700)

</style>






