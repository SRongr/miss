<template lang="pug">
  .wrapper(ref="wrapper")
    Photo.photo1(:src="src1")
    Photo.photo2(:src="src2")
    Photo.photo3(:src="src3")
    Photo.photo4(:src="src4")
    Photo.photo5(:src="src5")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Essay from '../../../common/components/Essay'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
import images from '../images.json'
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
    Photo
  },
  data() {
    return {
      src1: images.src1,
      src2: images.src2,
      src3: images.src3,
      src4: images.src4,
      src5: images.src5
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
  background-color #000000
  flex-direction column
  position relative
  .photo1
    position absolute
    top rem(40)
    left rem(50)
    width rem(300)
    height rem(500)
    transform rotate(10deg)
  .photo2
    position absolute
    top rem(40)
    right rem(50)
    width rem(300)
    height rem(500)
    transform rotate(350deg)
  .photo3
    position absolute
    bottom rem(40)
    left rem(50)
    width rem(300)
    height rem(500)
    transform rotate(350deg)
  .photo4
    position absolute
    bottom rem(40)
    right rem(50)
    width rem(300)
    height rem(500)
    transform rotate(10deg)
  .photo5
    position absolute
    left 50%
    top 50% 
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width rem(400)
    height rem(400)
  .bg
    position absolute
    width 100%
    height 100%
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
