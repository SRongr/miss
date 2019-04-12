<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    BackCalendar(@backClick="backClick")
</template>

<script>
import Article from '../../common/components/Article'
import BackCalendar from '../../common/components/BackCalendar'
export default {
  props: {
    ani: {
      type: Boolean,
      required: true
    },
  },
  components: {
    Article,
    BackCalendar
  },
  data() {
    return {
      calendarText: [
        '这是我一年里最激动的时候, 有多激动。 可能再也感受不到的激动',
      ],
      calendarTextIndex: 0,
      articleStyle: {
        color: 'red',
        fontSize: `${44/75}em`,
      }
    }
  },
  mounted() {
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
    background-image url('https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/end9.jpeg')
    background-position center center
    background-size cover
</style>
