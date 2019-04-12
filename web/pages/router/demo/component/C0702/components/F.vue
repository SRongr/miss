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
      src1: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end11.png',
      src2: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end12.png',
      src3: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end15.png',
      src4: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end16.jpg',
      src5: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end18.png'
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
