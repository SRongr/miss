
<template lang="pug">
	img.icon(src="../../img/arrow.png", v-if="isShow")
</template>

<script>
export default {
	name: 'arrow',
	props: {
		delay: Number
	},
	data () {
		return {
			isShow: false
		}
	},
	mounted () {
		const delay = setTimeout(() => {
			this.isShow = true
			clearTimeout(delay)
		}, this.delay)
	}
}
</script>

<style lang="stylus" scoped>
@import '../../../../../css/base.styl'
@import '../css/main.styl'
	.icon
		width rem(45)
		height rem(23)
		position absolute 
		bottom rem(50)
		left 50%
		margin-left rem(-45/2)
		animation arrowflash 1s linear infinite alternate
    // z-index 10
	@keyframes arrowflash {
		from {
			opacity 0.5
			transform translateY(5px)
		}
		to {
			opacity 1
			transform translateY(-5px)
		}
	}
	@keyframes showarrow {
		from {
			opacity 0
		}
		to {
			opacity 1
		}
	}
</style>


