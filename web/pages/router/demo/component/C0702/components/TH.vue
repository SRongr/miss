<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Article(:calendar-text="calendarText", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
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
        '大三最后那几天。 这我在学校里最快乐的时光。 我一度认为， 我的大学是荒废的。不完整的。 只有那段时间，我才感觉，我的大学生活是成功的',
      ],
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
