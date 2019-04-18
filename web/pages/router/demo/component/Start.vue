<template lang="pug">
  .wrapper(ref="wrapper")
    .describe.infinite(ref="describe",v-if='showDescribe && ani') {{calendarText[calendarTextIndex]}}
    .describe.one(v-if='ani && !showDescribe') {{calendarText[calendarTextIndex]}}
    .start.one(@touchstart="touchstart",@touchend="touchend", ref="start", v-if='ani') START
</template>

<script>
export default {
  props: ['ani'],
  data() {
    return {
      showDescribe: false,
      calendarText: [
        '之前的我是个粗心的人,没能好好把握每一次接触的机会',
        '直到失去了, 才发现很多该做的没有做',
        '这个项目，本是留到我们以后记录生活的点点滴滴',
        '现在，它提前了',
        '我想捡起仅剩不多的记忆碎片',
        '那么, 欢迎来到时光日历'
      ],
      calendarTextIndex: 0
    }
  },
  watch: {
    ani(boolean) {
      if (boolean) {
          this.showDescribe = true
    setTimeout(() => {
      this.calendarTextStart()
    }, 1000)
      }
    }
  },
  methods: {
    calendarTextStart () {
      const describe = this.$refs.describe
      const timer = setInterval(() => {
        this.calendarTextIndex ++
        console.log(this.calendarTextIndex)
        if (this.calendarTextIndex === this.calendarText.length - 1) {
          clearInterval(timer)
          // describe.className = "describe one"
          this.showDescribe = false
          console.log('slideTo')
        }
      }, 3000)
    },
    touchstart () {
      this.$refs.start.style.color = '#00FF00'
    },
    touchend () {
      this.$refs.start.style.color = 'green'
      if (this.calendarTextIndex !== this.calendarText.length - 1 ){
        return 
      }
      this.$emit('slideTo', 2, 0)
      this.$refs.wrapper.className = 'wrapper out'
    },
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
  &.out
    fade(fade, 1, 0)
    animation fade 1s linear forwards
  .describe
    width  rem(500)
    font-size rem(40)
    text-align center
    opacity 0
    &.infinite
      fadein(1.5s, 1s, alternate infinite)
    &.one
      fadein(1.5s, .5s, forwards)
  .start
    opacity 0
    width rem(400)
    height rem(200)
    text-align center
    color green 
    font-family Helvetica
    line-height rem(200)
    &.one
      fadein(1.5s, 17s, forwards) // 这里不知道为啥，最后一次的延迟事件要从dom有的时候开始计算，而不是生成这个class的时候开始算 1+3+3+3 + 延迟1.5秒
</style>
