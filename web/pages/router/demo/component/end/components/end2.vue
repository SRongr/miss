<template lang="pug">
  .end-wrapper(ref="wrapper")
    Photo.photo1(:src="src1" v-if="ani")
    Photo.photo2(:src="src2" v-if="ani")
    Photo.photo3(:src="src3" v-if="ani")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
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
       '未来。。。'
      ],
      calendarTextIndex: 0,
      src1: images.src2,
      src2: images.src3,
      src3: images.src4,
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
  .photo1
    position absolute
    opacity 0
    left rem(40)
    top rem(40)
    width rem(300)
    height rem(400)
    transform rotate(350deg)
    fade(photo1)
    animation photo1 linear 2s forwards 2s
  .photo2
    position absolute
    opacity 0
    right rem(40)
    top rem(40)
    width rem(300)
    height rem(400)
    transform rotate(350deg)
    fade(photo1)
    animation photo1 linear 2s forwards 2s
  .photo3
    position absolute
    bottom rem(100)
    opacity 0
    width 100%
    height rem(400)
    // transform rotate(350deg)
    fade(photo1)
    animation photo1 linear 2s forwards 2s
  .photo4
    position absolute
    opacity 0
    width rem(300)
    height rem(400)
    transform rotate(350deg)
    fade(photo1)
    animation photo1 linear 2s forwards 2s
  .article-wrapper
    // position absolute
    // bottom rem(0)
    height 100%
  
</style>
