<template lang="pug">
  .wrapper
    .describe(v-if="ani") {{calendarText[calendarTextIndex]}}
    .year {{year}} 年
    .calendar-wrapper
      .paper
        .paper-top
          .paper-top-content
            //- .num 4
            //- CountUp.num(:end-value="1", :id="'day'")
            .num {{month}}
            .text 月
        .paper-bottom
          //- .paper-bottom-content 9
          CountUp.num(:target-day="targetDay", v-if='showCountup', @addMonth="addMonth", @showContent="showContent")
          .num(v-else) 1
          .paper-shadow
      .calendar-bottom
      .calendar-right
      .calendar-left
</template>


<script>
import CountUp from '../common/components/CountUp'
export default {
  components: {
    CountUp
  },
  props: ['goOn', 'ani'],
  computed: {
  },
  data() {
    return {
      calendarText: [
        '这是你不知道的一年 C17',
        `我们跳过这一年, 从第二次加你开始
        时间穿梭~`,
        'C0828',
        'C1109',
        'C1205',
        'C1231',
        'C0119',
        'C0225',
        'C0307',
        'C0406',
        'C0407',
        '那么, 欢迎来到时光日历'
      ],
      calendarTextIndex: 0,
      dateArr: [
        [1, 1],
        [7, 2],
        [8, 28],
        [11, 9],
        [12, 5],
        [12, 31],
        [1, 19],
        [2, 25],
        [3, 7],
        [4, 6],
        [4, 7]
      ],
      month: 1, // 日历开始月份
      targetDay: 0, // 目标日期默认是0 ， 代表这个月份没有目标日期
      index: 0, // 当前未达到的 dateArr[index] 日期
      year: 2017,   // 开始年
      showCountup: false,
      startValue: 1,
      init: true
      // showDescribe: false
    }
  },
  watch: {
    // goOn(boolean) {
    //   console.log(boolean)
    //   if (boolean) {
    //     this.startValue = this.targetDay
    //     this.getTargetDay()
    //   }
    // },
    ani(boolean) {
      console.log(boolean)
      if (boolean) {
        if (this.init) {
          const timer = setTimeout(() => {
            this.$emit('slideTo', this.index + 2)
            this.init = false
            clearTimeout(timer)
          }, 1000)
        } else {
          if (this.index == 1) {
            console.log()
            const timer1 = setTimeout(() => {
              this.year = 2018
              this.showCountup = true
              // this.getTargetDay()  
              this.month = this.dateArr[this.index][0]
              this.targetDay = this.dateArr[this.index][1]
            }, 2000)
            const timer2 = setTimeout(() => {
              this.showContent()
            }, (4000));
          } else {
            this.getTargetDay()  
          }
        }
      } else {
        console.log('calendarTe++')
        this.index ++
        this.calendarTextIndex ++
      }
    }
  },
  mounted () {
    // console.log('mounted')
    this.showDescribe = true
    // setTimeout(() => {
    //   this.$emit('slideTo', 2)
    // }, 3000)
    // setTimeout(() => {
    //   this.calendarTextStart()
    // }, 1000)
console.log(this.dateArr)
    if (this.month === this.dateArr[0][0]) {
      this.targetDay = this.dateArr[0][1]
    } else {
      this.targetDay = 0
    }
    // this.showCountup = true
  },
  methods: {
    calendarTextStart () {
      const timer = setInterval(() => {
        this.calendarTextIndex ++
        if (this.calendarTextIndex > this.calendarText.length - 1) {
          clearInterval(timer)
          this.showDescribe = false
        }
      }, 3000)
    },
    addMonth () {
      console.log('addMonth')
      if (this.month === 12) {
        this.month = 1
        this.year ++
      } else {
        this.month ++
      }
      this.getTargetDay()
    },
    getTargetDay () {
      if (this.dateArr.length <= this.index) {
        return
      }
      if (this.dateArr[this.index][0] === this.month) {
          this.targetDay = this.dateArr[this.index][1]
      } else {
        this.targetDay = 0
      }
    },
    showContent () {
      console.log('showContent')
      this.$emit('slideTo', this.index + 2)
      // this.index ++         // 到达日期，去展示内容 index++
      setTimeout(() => {
        // this.startValue = this.targetDay
        // this.getTargetDay()
      }, 1000)
    }
  }
}
</script>



<style lang="stylus" scoped>
@import '../../../../css/base.styl'
@import '../common/css/main.styl'
.wrapper
  width 100%
  height 100%
  background-color #33334a
  flex-direction column
  flexC()
  .describe
    width  rem(500)
    font-size rem(40)
    text-align center
    opacity 0
    fadein(1.5s, 1s, alternate forwards)
    position absolute
    top rem(100)
  .year
    height rem(200)
    line-height rem(0)
    font-size rem(100)
  .calendar-wrapper
    width rem(500)
    height rem(500)
    // border 1px solid red
    background-color #69767d
    position relative
    box-shadow rem(-2) rem(5) rem(2) rem(2) #1f1d1d
    .paper
      position absolute 
      top rem(-40)
      height rem(500)
      width rem(440)
      left rem(30)
      box-shadow rem(-4) rem(5) rem(2) rem(2) #504e4e
      .paper-top
        background-color red
        height rem(150)
        font-size rem(80)
        .paper-top-content
          height 100%
          flexC()
      .paper-bottom
        height rem(350)
        font-size rem(230)
        background-color #ffffff
        color #000000
        flexC()
        flex-direction column
        justify-content space-between
        .paper-shadow
          height rem(20)
          background-color red
          width 100%
          background linear-gradient(#b9b5b5 0%,#333 90%, #000 100%)
    .calendar-left
      background-color #333
      box-shadow rem(2) rem(0) rem(2) rem(2) #333333 
      position absolute 
      left 0
      width rem(5)
      height 100%
    .calendar-bottom
      position absolute 
      bottom  0
      width 100%
      height rem(20)
      background linear-gradient(#69767d 0%,#333 45%,#ada9a9 50%, #000 60%)
    .calendar-right
      position absolute
      right 0
      height 100%
      width rem(5)
      background linear-gradient(#c3bdbd 99%, #000 99%)
</style>

