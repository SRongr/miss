<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Article(:calendar-text="calendarText", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
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
  },
  data() {
    return {
      calendarText: [
        '3月份，学了css3 (做了动画)，4月份学了设计模式(做了雪花场景), 5月份学了Vue(整体的结构框架), 6月份学到了发布到heroKu外网上, 每学一点， 我就参与构思。嘿嘿, 我也是有私心的。 事实证明， 你给我的动力， 太大了。这次的项目，我用到了更多。整体的逻辑，是在工作中学到过的。 是的。这个项目从很久之前就开始想了， 只不过之前的日历构想，是记录我们以后的点点滴滴。 唉',
      ],
      calendarTextIndex: 0,
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
  // background-color #000000
  flex-direction column
  .bg
    position absolute
    width 100%
    height 100%
    background-image url('https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/miss4.jpeg')
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
