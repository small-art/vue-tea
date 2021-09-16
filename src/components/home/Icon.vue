<template>
	<div class="icon">
		<div class="icon-item" v-for="(item,index) in iconsList" :key="index">
			<img :src="item.imgUrl" >
			<span>{{item.name}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			iconsList:Array
		},
	}
</script>

<style scoped>
	.icon{
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding:1.2rem 0.225rem;
		text-align: center;
		align-items: center;
		font-size: 0.9375rem;
		border-bottom: .4px solid #cfcfcf;
	}
	.icon-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon-item img{
		width: 2.375rem;
		height: 2.375rem;
		margin-bottom: 0.425rem;
	}
	
</style>
