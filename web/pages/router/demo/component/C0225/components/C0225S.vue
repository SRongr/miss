<template lang="pug">
  .C0225-wrapper
    Photo.photo1(:src="src1")
    Photo.photo2(:src="src2")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    //- BackCalendar(@backClick="backClick")
</template>

<script>
import Photo from '../../../common/components/Photo'
import Article from '../../../common/components/Article'
import BackCalendar from '../../../common/components/BackCalendar'
export default {
  components: {
    Photo,
    Article,
    BackCalendar
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        //  终于踏上这条路了
       '嘿嘿。这就是我找的房子了。精装修，小阳台。锅碗瓢盆样样齐全。我还淘了电脑桌，热水器。加湿器，懒人桌。小冰箱。新东方大厨在线烹饪，老头子吃了直喊好！好想让你尝尝我的手艺啊 O(∩_∩)O'
      ],
      src1: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/miss9.jpeg',
      src2: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end23.jpeg',
      articleStyle: {
        fontSize: `${35/75}em`,
        fontWeight: '400'
      }
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
  .C0225-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    .photo1
      position absolute
      height rem(400)
      width rem(300)
      top rem(50)
      left  rem(50)
      transform rotate(350deg)
    .photo2
      position absolute
      height rem(400)
      width rem(300)
      top rem(50)
      right rem(50)
      transform rotate(10deg)
    .article-wrapper
      // height 50%
      position absolute
      height rem(400)
      top rem(600)
</style>






