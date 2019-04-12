<template lang="pug">
  .wrapper(ref="wrapper")
    Article.article-wrapper1(:calendar-text="calendarText1", v-if='ani', :article-style="articleStyle")
    Photo.photo1(:src="src1")
    Article.article-wrapper2(:calendar-text="calendarText2", v-if='ani', :article-style="articleStyle")
    Photo.photo2(:src="src2")
    Article.article-wrapper3(:calendar-text="calendarText3", v-if='ani', :article-style="articleStyle")
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
      calendarText1: [
       '不知道你是否还会在看一遍。唉。是我的错。我没能提前了解你想要的是什么， 你缺什么。我只是把我当前感觉需要的东西寄了过去，没有为你着想。是我想法太简单了。',
      ],
      calendarText2: [
        '唉， 不知道现在， 将来 还有没有机会'
      ],
      calendarText3: [
        '送你只逐日金痕烤鸡你应该会喜欢吧 哈哈 原来武器还可以这么用'
      ],
      calendarTextIndex: 0,
      src1: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end21.png',
      src2: 'https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/hoppy10.jpeg',
      articleStyle: {
        fontSize: 38
      }
    }
  },
  mounted() {
    // this.showDescribe = true
    // setTimeout(() => {
    //   this.calendarTextStart()
    // }, 1000)
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
  flexC()
  justify-content space-between
  flex-direction column
  .photo1
    // height 35%
    // width rem(500)
    position absolute
    top 30%
    width rem(750)
    height 10%
  .photo2
    position absolute
    top 60%
    width rem(750)
    height 20%
  .article-wrapper1
    position absolute
    top 0
    height 30%
    justify-content center
  .article-wrapper2
    position absolute
    top 40%
    height 20%
    justify-content center
  .article-wrapper3
    position absolute
    top 80%
    height 20%
    justify-content center
</style>
