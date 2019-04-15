<template lang="pug">
  span.count(id="count")
</template>

<script>
import CountUp, { count } from "countup"
export default {
  data() {
    return {
      countUp: null
    }
  },
  components: {
    CountUp
  },
  props: {
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    startValue: {
      type: Number,
      required: false,
      default: 1
    },
    decimals: {
      type: Number,
      required: false,
      default: 0
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {
          useEasing: false,
          useGrouping: true,
          separator: "",
          decimal: "."
        }
      }
    },
    targetDay: {
      type: Number,
      required: true
    }
  },
  watch: {
    targetDay(value) {
      this.resetCountUp()
    },
  },
  mounted() {
    this.createCountup()
  },
  methods: {
    createCountup() {
      // if (this.targetDay) {
      //   this.duration = (this.targetDay - this.startValue) / 30// 数字滚动速度
      //   this.endValue = this.targetDay
      //   console.log(this.duration)
      // } else {
      //   this.duration = 1 // 数字滚动速度一个月的满速
      //   this.endValue = 30
      // }  
      console.log(this.targetDay - this.startValue)
      // this.duration = Math.abs((this.targetDay - this.startValue) / 30)
      this.endValue = this.targetDay ? this.targetDay : 30
      const duration = Math.abs(this.endValue - this.startValue) / 15
      const options = {
        useEasing: false
      }
      this.countUp = new CountUp(
        `count`,
        this.startValue,
        this.endValue,
        this.decimals,
        duration,
        options
      )
      if (!this.countUp.error) {
        this.countupReset(this.countUp, this.targetDay)
      } else {
        console.log(this.countUp.error)
      }
    },
    countupReset(countUp, targetDay) {
      countUp.start(() => {
         if (this.targetDay) {
            // 跑到目标日期
            this.$emit('showContent')
          } else {
            // 跑完一个月
            this.$emit("addMonth")
            this.resetCountUp()
          }
      })
    },
    resetCountUp () {
      console.log('pause')
      this.countUp.pauseResume()
      this.countUp = null
      this.createCountup()
    }
  }
}
</script>



