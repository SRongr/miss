<template lang="pug">
  .wrapper
    .title 正在加载资源请稍候
    img.fade(src="https://wrs970808-image.oss-cn-beijing.aliyuncs.com/jcy/timg.jpeg")
    .content
      .progress {{progress}}%
</template>

<script>
import Vue from 'vue'
let createjs
if (!Vue.prototype.$isServer) {
	createjs = require('preload-js')
}

export default {
	name: 'summary-2018-loading',
	props: {
		resources: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			progress: 0
		}
	},
	watch: {
		resources (value) {
      console.log(value)
			this.resources = value
			if (this.resources.length) {
				const timer = setTimeout(() => {
					console.log(timer)
					this.startPreload()
					clearTimeout(timer)
				}, 500)
			}
		}
	},
	methods: {
		startPreload () {
			const preload = new createjs.LoadQueue(true)
			// 注意加载音频文件需要调用如下代码行
			preload.installPlugin(createjs.Sound)
			preload.on('fileload', this.handleFileLoad)
			preload.on('progress', this.handleFileProgress)
			preload.on('complete', this.loadComplete)
			preload.on('error', this.loadError)
			preload.loadManifest(this.resources)
		},
		handleFileLoad (e) {
			console.log(e)
			if (e.item.type === 'sound') {
				console.log('音乐加载完成：' + e.item.src)
			}
		},
		handleFileProgress (e) {
			this.progress = Math.floor(e.progress * 100)
		},
		loadComplete (e) {
			console.log(e)
			console.log('已加载完毕全部资源')
			this.$emit('complete', 1,1000)
		},
		loadError (e) {
			console.log(e)
			console.log('加载出错')
		}
	}
}
</script>


<style lang="stylus" scoped>
@import './common/css/main.styl'
@import '../../../css/base.styl'
  .wrapper
    width 100% 
    height 100% 
    background-color #000000
    display flex
    flex-direction column
    justify-content center
    align-items center
    text-align center
    color #ffffff
    font-size rem(40)
    .fade
      width 100%
      opacity  0.5
      fade(fade, 0.5, 1)
      animation fade 1s linear alternate infinite
</style>


