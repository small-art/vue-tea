<template>
	<div class="icon">
		<div class="icon-item" v-for="(item,index) in iconList" :key="index">
			<img :src="item.imgUrl" >
			<span>{{item.name}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				iconList:[
					{id:1,imgUrl:'./images/icon1.png',name:'自饮茶'},
					{id:2,imgUrl:'./images/icon2.png',name:'茶具'},
					{id:3,imgUrl:'./images/icon3.png',name:'茶礼盒'},
					{id:4,imgUrl:'./images/icon4.png',name:'领福利'},
					{id:5,imgUrl:'./images/icon5.png',name:'官方验证'}
					
				]
			}
		}
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
