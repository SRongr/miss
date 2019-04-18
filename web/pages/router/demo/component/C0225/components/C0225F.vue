<template lang="pug">
  .wrapper
    Photo.photo(:src="src")
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani', :article-style="articleStyle")
    Arrow(:delay="2000", v-if='ani')
</template>

<script>
import Photo from '../../../common/components/Photo'
import Article from '../../../common/components/Article'
import BackCalendar from '../../../common/components/BackCalendar'
import Arrow from '../../../common/components/Arrow'
import images from '../images.json'
export default {
  components: {
    Photo,
    Arrow,
    Article,
    BackCalendar
  },
  props: ['ani'],
  data() {
    return {
      calendarText: [
        //  终于踏上这条路了
       '听你说同意了我去洛阳了， 叔叔也同意了。我立马定了车票。嘿嘿。我想，等我去了洛阳，我们会有更多的机会互相了解，见面吧。那样，我们的感情就会快速发展！'
      ],
      src: images.src1,
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
  .wrapper
    width 100% 
    height 100%
    position relative
    background-color #000000
    .photo
      height 35%
    .article-wrapper
      height 50%
</style>






