<template lang="pug">
  .C1109-wrapper
    Article(:calendar-text="calendarText" :article-style="articleStyle")
    BackCalendar(@backClick="backClick")
</template>

<script>

import Article from '../../common/components/Article'
import BackCalendar from '../../common/components/BackCalendar'
export default {
  components: {
    Article,
    BackCalendar
  },
  data() {
    return {
      calendarText: [
        `   这是一个周五。我比往常要早下班。出地铁的时候，大概在九点之前。 今天的话题是从我临工位那位老姐说起。是说他被假冒淘宝客服骗了六七万的事情。后来又说了许多营销的事情。那天你第一次给我发语音。能听到你的声音， 真的很幸福。虽然我早早的就到了楼下。但是我一直没有上去，因为。我怕因为坐电梯耽误回复你消息。聊完了接着就找我哥们炫耀。说我女神今天给我发语音了。哈哈哈哈，我感觉我喜欢你之后，跟你相处我会变得如此屌丝，好开心啊。我的幸福感其实来的很容易。不饿的人，一日三餐并不觉得想要获得什么。如果一个人长久没有进餐，他才会显得着急，显得狼吞虎咽。`
      ],
      articleStyle: {
        fontSize: `${38/75}em`,
      }
    }
  },
  mounted () {

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
  .C1109-wrapper 
    width 100%
    height 100%
    background-color #000000
    position relative
</style>
