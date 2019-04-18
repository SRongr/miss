<template lang="pug">
  .end-wrapper(ref="wrapper")
    Photo.photo(:src="src" v-if="ani")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
import images from '../images.json'
export default {
  props: {
    ani: {
      type: Boolean,
      required: true
    },
  },
  components: {
    Article,
    Arrow,
    Photo
  },
  data() {
    return {
      calendarText: [
       '当前页面的文字。我写过无数种，都感觉不合适。最难的就是结尾。这段时间，梦到你很多次。我有很多种情绪想要表达。如果可以，我希望可以重新来过。忘掉曾经的印象。我会做的比以前要好。'
      ],
      calendarTextIndex: 0,
      src: images.src1,
      articleStyle: {
        fontSize: `${38/75}em`,
      }
    }
  },
  mounted() {
    // this.showDescribe = true
    // setTimeout(() => {
    //   this.calendarTextStart()
    // }, 1000)
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../../css/base.styl'
@import '../../../common/css/main.styl'
.end-wrapper
  width 100%
  height 100%
  background-color #000000
  flex-direction column
  position relative
  flexC()
  justify-content space-between
  flex-direction column
  .photo
    position absolute
    width rem(750)
    opacity 0
    height 30%
    fade(photo)
    animation photo linear 2s forwards 2s
  .article-wrapper
    // position absolute
    // bottom rem(0)
    height 100%
  
</style>
