<template>
	<div id="cart">
		<div @click="goBack">返回上一页</div>
	</div>
</template>

<script>
	export default {
		methods:{
			goBack(){
				this.$router.push('/')
			}
		}
	};
</script>

<style>
</style>
