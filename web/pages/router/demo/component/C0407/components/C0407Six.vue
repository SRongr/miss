<template lang="pug">
  .C0407TI-wrapper
    Photo.photo1(:src="src")
    //- Photo.photo2(:src="src2")
    //- Article.article-wrapper(:calendar-text="calendarText1", v-if='ani', :article-style="articleStyle")
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
      calendarText1: [
        // 最后一天
       ""
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
        fontWeight: '700',
      },
      src: images.src6,
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
  .C0407TI-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    background-size cover
    background-repeat no-repeat
    .photo1
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)

</style>






