<template>
    <div>
		<div v-for="item in childArr">
			{{item.tit}}--{{item.wz}}
		</div>
		<button @click="consol">点我</button>
		<button @click="ss">搜索</button>
	</div>
</template>
<style lang="scss">
</style>
<script>
export default {
	//1.  父组件传子组件，子组件用props接收 --List.vue(父)和Public.vue（子）
	data() {
		return {
			name: 'zhaogoutou',
			content: '繁华街道司法所大家'
		}
	},
	props:{
		childArr:{
			type: Array,
			default: []
		},
		twoArr: {
			type: Array,
			default: []
		}
	},
	created () {
		console.log(this.childArr)
	},
	mounted () {
		console.log(this.twoArr)
	},
	// 2. 子组件传值给父组件，子组件需用事件传值，需写data,父组件的事件为子组件的事件名称，则父组件的事件名称随意定义（通过methods写入方法），$emit(触发)
	methods : {
		consol() {
			this.$emit('consol', this.name)
		},
		ss() {
			this.$emit('ss',this.content)
		}
	}
};
</script>