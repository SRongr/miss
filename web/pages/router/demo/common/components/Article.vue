<template lang="pug">
  .wrapper
    .article(v-for="item in calendarText", :style="{fontSize:`${articleStyle.fontSize/75}em`}") {{item}}
</template>

<script>
export default {
  props: {
    calendarText: {
      require: true
    },
    articleStyle: {
      require: false,
      default() {
        return {
          fontSize: 44
        }
      }
    }
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../../../../css/base.styl'
@import '../css/main.styl'
  .wrapper
    width 100%
    height 100%
    background-color #000000
    flex-direction column
    flexC()
    .article
      color #fff
      overflow-y scroll
      font-weight 700
      overflow hidden
      opacity 0
      fadein(1.5s, 0.5s)
      padding rem(10) rem(100)
      text-align center
</style>
