<template>
	<div>
		<Card></Card>
		<ul>
			<li>
				<h2>
					<img src="" >
				</h2>
				<div>
					<h3></h3>
					<p></p>
					<div class="price"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import Card from './Card.vue'
	export default{
		data(){
			return {
				recommendList:[
					{
						id:1,
						imgUrl:'../../assets/images/recommend1.jpeg',
						name:'龙井1號铁罐250g',
						content:'鲜爽甘醇 口粮首选',
						price:68
					},
					{
						id:1,
						imgUrl:'../../assets/images/recommend2.jpeg',
						name:'龙井1號铁罐250g',
						content:'鲜爽甘醇 口粮首选',
						price:68
					}
				]
			}
		},
		components:{
			Card
		}
		
	}
</script>

<style>
</style>
