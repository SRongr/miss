<template lang="pug">
  .wrapper
    Photo.photo(:src="src")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    BackCalendar(@backClick="backClick")
</template>

<script>
import Photo from '../../common/components/Photo'
import Article from '../../common/components/Article'
import BackCalendar from '../../common/components/BackCalendar'
import images from './images.json'
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
       '还记得这个包裹吗。他应该也是属于你最不需要的东西之一吧。里面是两个哈士奇。一大一小。 买之前我也问了你一下，你回答的比较模糊。。我就自作主张了。这两只狗可不好带啊。来回做了60站地铁呢。这里的娃娃店是元旦通宵的时候看上的。觉得不错。正好当时看你王者段位下降了(实际上是赛季刷新了。),感觉你会不高兴。。就像给你买个娃娃。哈士奇也是搞笑一族，想逗你开心。嘿嘿。不知道他俩还活没活着',
      ],
      src: images.src,
      articleStyle: {
        fontSize: `${32/75}em`,
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
@import '../../../../../css/base.styl'
@import '../../common/css/main.styl'
  .wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    .photo
      height 40%
    .article-wrapper
      height 50%
</style>
