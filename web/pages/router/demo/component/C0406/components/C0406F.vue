<template lang="pug">
  .C0406F-wrapper
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
export default {
  components: {
    Article,
    Arrow,
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        // 女神节日快乐！
       '明天就要跟女神出来玩啦，盼天盼地终于等到这一天(*^__^*) 见面之前不好好准备一下怎么行呢！万一玩累了，饿了，得吃点零食吧。我准备了博饼还有酸奶（盒子在女神节送出去啦）。海底捞一定好吃，吃多了可不利于消化，我准备了一盒饭后消食片，儿童版的哦。记得女神节之后你说你身体不舒服，那时我就买了阿胶糕，你说你要我给你送的东西了，我拆开拿出来几个给你当糖吃可行吧。玩一天万一手机没电了咋办 => 充电宝和安卓数据线。明天万一坐公交呢，我10块钱换了7块钱的硬币，另外三块买棒棒糖啦。当然还有纸巾和雨伞，以备不时之需。感觉，我还挺细心的。还有两个东西不方便拿。都是从家里带来的。一罐婴儿奶粉，一罐椴树雪蜜（我爸说是好东西哦，对皮肤好）'
      ],
      articleStyle: {
        fontSize: `${35/75}em`,
        fontWeight: '700',
        color: '#ff0087',
        fontFamily: 'cursive',
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
  .C0406F-wrapper
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
      bottom 0
      right 0
      width rem(400)
      height rem(200)
      opacity 0.6
    .article-wrapper
      position absolute
      top 0 
      left 0
      bottom 0 
      right 0

</style>






