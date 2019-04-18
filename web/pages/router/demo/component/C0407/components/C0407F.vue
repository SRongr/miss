<template lang="pug">
  .C0407F-wrapper
    Photo.photo(:src="src")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
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
      calendarText: [
        // 最后一天
       '定了7点半的闹钟。稍微吃点饭，清点好所有的东西，可不能落下什么，出发！我得早点去，万一去的比你晚，那显得我多不好。叫个滴滴。10点到达目的地。哪天飘着柳絮，担心你会难受，我随之找了家超市，买了两个口罩。希望我的用心你可以感受到❤'
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
        fontWeight: '700',
        // color: '#ff0087',
        // fontFamily: 'cursive',
      },
      src: images.src1
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
  .C0407F-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    background-size cover
    background-repeat no-repeat
    .bg
      width 100%
      height 100%
    .photo
      position absolute
      right 0
      width 100%
      height rem(500)
    .article-wrapper
      position absolute
      top rem(500)
      left 0
      right 0
      bottom 0
      height rem(700)

</style>






