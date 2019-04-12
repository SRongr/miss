<template lang="pug">
  .wrapper(ref="wrapper")
    .bg
    Article(:calendar-text="calendarText", v-if='ani')
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
      calendarText: [
        '真的很高兴,这次的行动得到了肯定。我也是很早就在捉摸如何在大三暑假之前表达我的感情。那朵花, 是三月份买的, 我不敢贸然的送给你, 因为我没有好的理由将那朵花给你。怕你拒绝。 那朵花的意义在我看来是很珍贵的, 虽然他没什么实际的作用。但一生送一人的标语, 没办法让我不认真对待。 我没有什么特长。不会唱歌，不会跳舞(虽然是我们院男神舞蹈队的。跟你们班魏昊一起，纯碎瞎闹), 我想到了用我所学的东西',
      ],
      calendarTextIndex: 0,
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
  // background-color #000000
  flex-direction column
  .bg
    position absolute
    width 100%
    height 100%
    background-image url('https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/hoppy4.jpeg')
    background-size cover
    background-repeat no-repeat
    background-position center
    opacity 0.5
  
</style>
