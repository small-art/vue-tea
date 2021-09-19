<template>
	<div class="like">
		<Card><span class="name">猜你喜欢</span></Card>
		<ul class="box">
			<li v-for="(item, index) in likeList" :key="index">
				<h2><img :src="item.imgUrl" /></h2>
				<div class="title">{{ item.name }}</div>
				<div class="price">
					￥
					<span>{{ item.price }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Card from './Card.vue';
export default {
	props: ['likeList'],
	components: {
		Card
	}
};
</script>

<style scoped lang="scss">
.like {
	padding: 0.425rem;
	width: 100%;
	font-size: 0.75rem;

	.box {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-right: 0.3125rem;
		flex-wrap: wrap;

		img {
			width: 11.2rem;
			height: 11.2rem;
		}
	}
}
</style>
