<template lang="pug">
  .wrapper(ref="wrapper")
    img.bg(:src="src")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
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
    Arrow
  },
  data() {
    return {
      calendarText: [
       '明明字难看的一匹， 我是怎么有勇气给你写字的呢。嘿嘿。我觉得我的画还看的过去。有没有注意里面很多表情包呀 (*^__^*)',
      ],
      src: images.src2,
      articleStyle: {
        fontSize: `${35/75}em`
      }
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
  flexC()
  justify-content space-between
  flex-direction column
  .bg 
    width 100% 
    height 80%
  
</style>
