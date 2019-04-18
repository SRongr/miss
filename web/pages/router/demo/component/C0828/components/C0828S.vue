<template lang="pug">
  .wrapper(ref="wrapper")
    Photo.photo1(:src="src")
    //- Arrow(:delay="2000", v-if='ani')
    Article.article-wrapper(:calendar-text="calendarText", v-if='ani',:article-style="articleStyle")
</template>

<script>
import Article from '../../../common/components/Article'
import Arrow from '../../../common/components/Arrow'
import Photo from '../../../common/components/Photo'
import images from '../images.json'
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
      calendarText: [
        '这是我一个哥们, 他知道我一直喜欢你，以及我追你的事情。感情经历也比较丰富。 当时我就咨询了一下他， 然后他给我说了这句话。当时我还不是很在意。现在回想起来，这句话真的太重要了。 若是能早些领悟， 结局也不止于此',
      ],
      src: images.src2,
      articleStyle: {
        fontSize: `${35/75}em`,
        fontWeight: '400'
      }
    }
  },
  mounted() {
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
  .photo1
    position absolute
    width rem(750)
    height rem(500)
  .article-wrapper
    position absolute
    top rem(500)
    bottom rem(0)
    // width 100%
    height rem(700)
    background-color #000000
    flex-direction column
    flexC()
  .photo2
    position absolute
    top rem(40)
    right rem(50)
    width rem(300)
    height rem(500)
    transform rotate(350deg)
  .photo3
    position absolute
    bottom rem(40)
    left rem(50)
    width rem(300)
    height rem(500)
    transform rotate(350deg)
  .photo4
    position absolute
    bottom rem(40)
    right rem(50)
    width rem(300)
    height rem(500)
    transform rotate(10deg)
  .photo5
    position absolute
    left 50%
    top 50% 
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width rem(400)
    height rem(400)
  .bg
    position absolute
    width 100%
    height 100%
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
