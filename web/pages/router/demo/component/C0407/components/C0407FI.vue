<template lang="pug">
  .C0407TI-wrapper
    Photo.photo1(:src="src1")
    Photo.photo2(:src="src2")
    Article.article-wrapper(:calendar-text="calendarText1", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
import images from '../images.json'
export default {
  components: {
    Article,
    Arrow,
    Photo,
  },
  props: ['ani'],
  data() {
    return {
      calendarText1: [
        // 最后一天
       '不知道这样的给你拍照你介不介意。女神的美。王荣铄记下了。照片都放在这上面了。手机已清空。若觉得有所冒犯，可以告知于我，我会全部清空。跟你逛公园很开心。很开心能带你去你没去过的"海底世界"，不知道将来，你若再去海底世界，会不会记得曾经有个你十分讨厌，他十分喜欢你的小伙子'
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
        fontWeight: '700',
      },
      src1: images.src4,
      src2: images.src5,
    }
  },
  methods: {
    backClick () {
      console.log('click')
      this.$emit('backClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../../css/base.styl'
@import '../../../common/css/main.styl'
  .C0407TI-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    background-size cover
    background-repeat no-repeat
    .bg
      width 100%
      height 100%
    .photo1
      position absolute
      left rem(50)
      top rem(50)
      width rem(300)
      height rem(400)
      transform rotate(350deg)
    .photo2
      position absolute
      right rem(50)
      top rem(50)
      width rem(300)
      height rem(400)
      transform rotate(10deg)
    .article-wrapper
      position absolute
      top rem(450)
      left 0
      right 0
      bottom 0
      height rem(700)

</style>






