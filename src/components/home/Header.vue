<template>
	<div class="header">
		<h1>
			<i class="logo iconfont icon-wunsun-logo"></i>
		</h1>
		<div class="search" @click="goSearch">
			<img class="search-icon" src="../../assets/images/sousou.png" >
			<span class="search-name">搜索的内容</span>
		</div>
		<div >
			<i class="kefu iconfont icon-wodekefu"></i>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goSearch(){
				this.$router.push('/search');
			}
		}
	}
</script>

<style scoped lang="scss">
	.header{
		background: #b0352f;
		width: 100%;
		height: 2.8125rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffff;
		padding: 0 0.425rem;
	}
	h1{
		margin-bottom: 1.225rem;
		margin-right: 0.5625rem;
	}
	.logo{
		font-size: 1.3rem;
	}
	.search{
		cursor: text;
		font-size: 0.9375rem;
		width: 15rem;
		background: #FFf;
		color: #ccc;
		line-height: 1.8125rem;
		padding: 0 0.625rem;
		border-radius: 1.25rem;
		
		img{
			width: 1.2rem;
			height: .8rem;
			font-size: 1rem;
			padding-right: 0.3125rem;
		}
		
	}
	.kefu{
		font-size: 2rem;
	}
</style>
