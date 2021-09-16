<template>
	<div class="recommend">
		<Card></Card>
		<ul class="recommend-content" v-for="(item,index) in recommendList" :key='index'>
			<li class="recommend-items" >
				<span class="tag">{{item.tag}}</span>
				<h2>
					<img class="goods" :src="item.imgUrl">
				</h2>
				<div>
					<h3>{{item.name}}</h3>
					<p>{{item.content}}</p>
					<div class="price">
						<span>￥</span>
						<b>{{item.price}}</b>
					</div>
				</div> 
			</li>
		</ul>
	</div>
</template>

<script>
	import Card from './Card.vue'
	export default{
		props:['recommendList'],
		components:{
			Card
		}
		
	}
</script>

<style scoped lang="scss">
	.recommend{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		.recommend-content{
			width: 23.125rem;
			height: 8.9375rem;
			position: relative;
			background: #ccc;
			border-radius: 0.625rem;
			margin-bottom: 0.55rem;
			font-size: 0.75rem;
		
			.recommend-items{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.tag{
					position: absolute;
					font-size: 0.75rem;
					width: 2.25rem;
					height: 1.25rem;
					background: orange;
					left: 1rem;
					top: 0;
					border-radius: 0 0 0.425rem 0.425rem;
				}
				
				.goods{
					width: 6.25rem;
					height: 6.25rem;
					
				}
				
				
			}
			
		}
		
	}
</style>

