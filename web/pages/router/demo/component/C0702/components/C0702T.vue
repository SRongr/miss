<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Essay(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Essay from '../../../common/components/Essay'
import Arrow from '../../../common/components/Arrow'
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
  },
  data() {
    return {
      calendarText: [
        '那个页面是我积累每一阶段所学的东西，都尽所能的用上，每学一点， 我就参与构思。嘿嘿, 谢谢你帮助我学习。事实证明， 你给我的动力， 太大了,简直是我生命中的贵人呢。这次的项目，我用到了更多。整体的逻辑，是在工作中学到过的。 是的。这个项目从很久之前就开始想了， 只不过之前的日历构想，是记录我们以后的点点滴滴。',
      ],
      calendarTextIndex: 0,
      articleStyle: {
        color: 'coral',
        fontSize: `${44/75}em`,
      },
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
  
</style>
