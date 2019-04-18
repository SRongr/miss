<template lang="pug">
  .wrapper
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    BackCalendar(@backClick="backClick")
</template>

<script>
import Article from '../../common/components/Article'
import BackCalendar from '../../common/components/BackCalendar'
import images from './images.json'
export default {
  components: {
    Article,
    BackCalendar
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
       '嘿嘿。一个智能回复机器人。秒回哦',
      ],
      src: images.src,
      articleStyle: {
        fontSize: `${44/75}em`,
        fontWeight: '400',
        color: 'red'
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
    background-image url('https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end13.jpeg')
    background-position center
    background-size cover
    background-repeat no-repeat

</style>
