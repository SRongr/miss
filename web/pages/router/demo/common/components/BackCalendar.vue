<template lang="pug">
  .wrapper(@click="backClick")
    .img
      .left
      .body
    .text 回到日历

</template>

<script>
export default {
  data() {
    return {
      time: 0
    }
  },
  methods: {
    backClick () {
      console.log('clickB')
      this.$emit('backClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../css/base.styl'
@import '../css/main.styl'
  .wrapper
    position absolute 
    bottom rem(20)
    left rem(20)
    height rem(30)
    width rem(300)
    background-color transparentify
    flexC()
    justify-content space-between
    transX(backX, 0%, -10%)
    animation backX linear 1s alternate infinite
    opacity .4
    .img
      position relative
      display flex
      flexC()
      .left
        width rem(0)
        height rem(0)
        float left 
        // background-color transparentify
        border rem(20) solid 
        border-right-color red
      .body
        float left
        width rem(100)
        height rem(20)
        background-color red
    .text
      color red
      font-size rem(30)
      font-weight 500
</style>
