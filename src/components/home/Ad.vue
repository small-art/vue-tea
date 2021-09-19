<template>
	<div class="ad">
		<section>
			<div v-for="(item,index) in adList" :key="index">
				<ul>
					<li>
						<img :src="item.imgUrl" >
					</li>
				</ul>
			</div>
		</section>
		
	</div>
</template>

<script>
export default {
	props: {
		adList: Array
	}
};
</script>

<style scoped>
.ad {
	width: 100%;
}
img {
	width: 100%;
	height: 100%;
}
</style>
