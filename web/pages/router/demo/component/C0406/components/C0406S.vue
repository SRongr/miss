<template lang="pug">
  .C0406S-wrapper
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import BackCalendar from '../../../common/components/BackCalendar'
export default {
  components: {
    Article,
    Arrow,
    BackCalendar,
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        // 女神节日快乐！
       '浑然不知，我今天的某几句无脑话，已经将我逼至绝境'
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
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
  .C0406S-wrapper
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
      height 35%
      width 40%
    .article-wrapper
      position absolute
      top 0 
      left 0
      bottom 0 
      right 0
    .snow
      width 100% 
      height 100%

</style>






