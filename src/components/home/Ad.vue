<template>
	<div class="ad">
		<block v-for="(item,index) in adList" :key="index">
			<img :src="item.imgUrl" >
		</block>
	</div>
</template>

<script>
	export default{
		props:['adList']
		
	}
</script>

<style scoped>
	.ad{
		width: 100%;
		height: 6.25rem;
	}
	.ad img{
		width: 100%;
		height: 100%;
	}
</style>
