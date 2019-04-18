<template lang="pug">
  .wrapper
    img.img(:src="src")
</template>

<script>
export default {
  props: {
    src: String,
  },
  data() {
    return {
      ani: false
    }
  },
  mounted() {
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../../../css/base.styl'
@import '../css/main.styl'
  .wrapper 
    background-color #ffffff
    padding rem(5)
    .img
      width 100%
      height 100%
      
      
</style>

