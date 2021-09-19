<template>
	<div class="list">
		<Header></Header>
		<section>
			<div class="list-item">
				<div>
					<span>默认</span>
				</div>
				<div class="sales">
					<span>销量</span>
					<div class="sales-item">
						<i class="iconfont icon-arrow_up_fat"></i>
						<i class="iconfont icon-xiajiantou"></i>
					</div>
				</div>
				<div class="price">
					<span>价格</span>
					<div class="price-item">
						<i class="iconfont icon-arrow_up_fat"></i>
						<i class="iconfont icon-xiajiantou"></i>
					</div>
				</div>
			</div>
			
			
			<ul class="box">
				<li>
					<div>
						<img src="../../assets/images/6363728602893842921158290.jpg" alt="">
					<h2>武夷中火醇香大红袍1号</h2>
					<div>
						<span>￥99</span>
						<span>立即购买</span>
					</div>
					</div>
					
				</li>
				<li>
					<div>
						<img src="../../assets/images/6363728602893842921158290.jpg" alt="">
					<h2>武夷中火醇香大红袍1号</h2>
					<div>
						<span>￥99</span>
						<span>立即购买</span>
					</div>
					</div>
					
				</li>
				<li>
					<div>
						<img src="../../assets/images/6363728602893842921158290.jpg" alt="">
					<h2>武夷中火醇香大红袍1号</h2>
					<div>
						<span>￥99</span>
						<span>立即购买</span>
					</div>
					</div>
					
				</li>
				
			</ul>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from '@/components/common/Tabbar.vue'
	import Header from '@/components/search/Header.vue'
	export default{
		components:{
			Tabbar,
			Header
		}
	}
</script>

<style scoped lang="scss">
	.list{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}
	section{
		flex: 1;
		.list-item{
			display: flex;
			font-size: 1rem;
			padding: 1.25rem;
			justify-content: space-around;
			align-items: center;
			div{
				margin-right: 1.25rem;
			}
			.sales{
				display: flex;
				
				justify-content: center;
				align-items: center;
				.sales-item{
					display: flex;
					flex-direction: column;
					padding: 0 0.25rem;
					transform: scale(.8);
				}
			}
			.price{
				display: flex;
				justify-content: center;
				align-items: center;
				.price-item{
					display: flex;
					flex-direction: column;
					padding: 0 0.25rem;
					transform: scale(.8);
				}
			}
			
			
		}
		.box{
			display: flex;
			font-size: 0.9375rem;
			flex-wrap: wrap;
			padding: 0 0.3125rem;
			li{
				display: flex;
				width: 50%;
				border: 1px solid;
				border-color: transparent orange orange transparent;
			}
			li:nth-child(2n){
				border-color: transparent transparent orange transparent;				
			}
			img{
				width: 100%;
			}
			
		}
	}
	
</style>
