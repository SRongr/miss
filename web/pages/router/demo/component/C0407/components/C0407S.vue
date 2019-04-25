<template lang="pug">
  .C0407S-wrapper
    Essay.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Essay from '../../../common/components/Essay'
import Arrow from '../../../common/components/Arrow'
export default {
  components: {
    Essay,
    Arrow,
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
       '我以为，在我们平时微信了解的过程中，我们已变的越来越好，所以没有一开始那么严肃，那么拘谨。事实相反，由于我的不认真的话语，你早已对我心生厌恶。你问我包里背的什么，我说没有给你的东西。一是你之前给我说的不会再收我的东西，二是我想等到里面的东西有作用的时候拿出来。'
      ],
      articleStyle: {
        fontSize: `${44/75}em`,
        fontWeight: '700',
      },
    }
  },
  methods: {
    backClick () {
      this.$emit('backClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../../../css/base.styl'
@import '../../../common/css/main.styl'
  .C0407S-wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    background-size cover
    background-repeat no-repeat
    .bg
      width 100%
      height 100%
    .article-wrapper
      position absolute
      top 0
      left 0
      right 0
      bottom 0

</style>






