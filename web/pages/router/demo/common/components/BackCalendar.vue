<template lang="pug">
  .back-wrapper(@click="backClick")
    img.img(src="../../img/arrow.png")
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
  .back-wrapper
    position absolute
    bottom rem(20)
    left rem(20)
    height rem(50)
    width rem(200)
    background-color transparentify
    flexC()
    justify-content space-between
    transX(backX, 0%, -10%)
    animation backX linear 1s alternate infinite
    opacity .5
    z-index 1
    .img
      transform rotate(270deg)
      width rem(50)
    .text
      text-shadow rem(6) rem(2) rem(5) #000000
      color #ffffff
      font-size rem(30)
      font-weight 500
</style>
