<template>
	<div class="swiper">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="(item, index) in swiperList" :key="index"><img class="swiperimg" :src="item.imgUrl" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'carrousel',
	props:["swiperList"],
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination',
				},

				autoplay: {
					delay: 2000,
					disableOnInteraction: false //操作swiper后不会停止播放
				},
				loop: true,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true
			},
			
		};
		
	},
	methods:{
		
	}
};
</script>

<style scoped>
.swiper {
	width: 100%;
	height: 11.5rem;
}
.swiperimg {
	width: 100%;
	height: 11.5rem;
}
::v-deep .swiper-pagination-bullet{
	background: #FFF;
	opacity: 1;
}
::v-deep .swiper-pagination-bullet-active{
	background:#ed435b;
}

</style>
