<template lang="pug">
  .wrapper
    //- img.img(ref="img") 
    img.img(:src="src")
    //- img.img(src="../../img/end12.png") 
    //- .img(:style="{backgroundImage: `url(${src})`}")
</template>

<script>
export default {
  props: ['src'],
  mounted() {
    console.log(this.src )
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

