<template lang="pug">
  .wrapper(ref="wrapper")
    Photo.photo(:src="src")
    Essay.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Essay from '../../../common/components/Essay'
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
    Essay,
    Arrow,
    Photo
  },
  data() {
    return {
      calendarText: [
       '每月5号发工资。嘿嘿，这是第一个月有剩余哦。 给我心爱的女神寄点好吃的。平时你给我的印象，就是忙。经常性的不回消息或者晚回。临近考研，我也怕耽误你学习。微信太费时间啦。给你写字吧。'
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
.wrapper
  width 100%
  height 100%
  background-color #000000
  flex-direction column
  position relative
  flexC()
  justify-content space-between
  flex-direction column
  .photo
    // height 35%
    // width rem(500)
    position absolute
    width rem(750)
    height 40%
  .article-wrapper
    position absolute
    bottom rem(0)
    height 60%
  
</style>
