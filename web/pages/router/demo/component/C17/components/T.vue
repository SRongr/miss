<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Article(:calendar-text="calendarText", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
export default {
  components: {
    Article
  },
  props: {
    ani: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      showDescribe: false,
      calendarText: [
        '某天发现你把我删了, 阴阳师玩了一会也正式弃游了',
        '想来自己天天无所事事, 游手好闲, 实在是没什么闪光点, 哪来的勇气追女神呢',
        '',
        '我喜欢你',
        '这是第一次付出行动',
        '惨败'
      ],
      calendarTextIndex: 0
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>

.wrapper
  width 100%
  height 100%
  background-color #000000
  flex-direction column
  
  flexC()
  .bg
    position absolute
    width 100%
    height 100%
    background-image url('https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/hoppy9.png') 
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
