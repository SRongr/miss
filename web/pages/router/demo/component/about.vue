


<template lang="pug">
  .wrapper
    span about   
    input(type='text', v-model='value')
    br
    
    .text {{value}}
    BackCalendar(@backClick="backClick")

</template>
<script>
import BackCalendar from '../common/components/BackCalendar'
export default {
  name: 'about',
  components: {
    BackCalendar
  },
  props: ['swiper'],
  data() {
    return {
      value: '234567'
    }
  },
  mounted () {
    console.log(this.swiper)
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
@import '../../../../css/base.styl'
  .wrapper
    width 100%
    height 100%
    position relative
</style>
