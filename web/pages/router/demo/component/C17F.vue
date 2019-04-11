<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Article(:calendar-text="calendarText", v-if='ani')
</template>

<script>
import Article from '../common/components/Article'
export default {
  props: {
    ani: {
      type: Boolean,
      required: true
    },
  },
  components: {
    Article
  },
  data() {
    return {
      calendarText: [
        '我本身对感情不善于表达, 不知道一段感情从何开始',
        '我没有告诉你我是谁, 担心你知道了不认识之后就会把我删掉',
        '在我印象中的你, 是一朵白莲花',
        '不近生人, 不染尘俗',
        '想着, 该如何找机会认识你呢',
      ],
      calendarTextIndex: 0
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
@import '../../../../css/base.styl'
@import '../common/css/main.styl'
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
    background-image url('../img/hoppy7.jpeg') 
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
