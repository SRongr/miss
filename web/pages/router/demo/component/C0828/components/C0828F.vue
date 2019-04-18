<template lang="pug">
  .wrapper(ref="wrapper")
    Photo.photo1(:src="src1")
    Arrow(:delay="2000", v-if='ani')
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani')
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
        '咳咳。 看到这段说说的时候 我是一脸懵逼。。。随后劝你消消气。别跟智障过不去。。 我也查了一下。 当然我一个旁观者并不能在一时间能了解太多东西。当然，在这里我想说的主要是下面一页',
      ],
      src1: images.src1
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../../css/base.styl'
@import '../../../common/css/main.styl'
.wrapper
  width 100%
  height 100%
  background-color #000000
  flex-direction column
  position relative
  .photo1
    position absolute
    width rem(750)
    height rem(500)
  .article-wrapper
    position absolute
    top rem(500)
    bottom rem(0)
    // width 100%
    height rem(700)
    background-color #000000
    flex-direction column
    flexC()
  
</style>
