<template>
	<div class="home">
		<div class="headers">
			<Header></Header>
			<ly-tab v-model="selectedId" :items="items" :options="options" @change="changeTab" class="topBbar"></ly-tab>
		</div>
		<section class="wrapper">
			<div>
				<div v-for="(item, index) in newData" :key="index">
					<Swiper v-if="item.type === 'swiperList'" :swiperList="item.data"></Swiper>

					<Icon v-if="item.type === 'iconsList'" :iconsList="item.data"></Icon>

					<Recommend v-if="item.type === 'recommendList'" :recommendList="item.data"></Recommend>

					<Ad v-if="item.type === 'adList'" :adList="item.data"></Ad>

					<Like v-if="item.type === 'likeList'" :likeList="item.data"></Like>
				</div>
			</div>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import Swiper from '@/components/home/Swiper.vue';
import Icon from '@/components/home/Icon.vue';
import Recommend from '@/components/home/Recommend.vue';
import Like from '@/components/home/Like.vue';
import Ad from '@/components/home/Ad.vue';
import Tabbar from '@/components/common/Tabbar.vue';
// 插件
import BetterScroll from 'better-scroll';
import axios from 'axios';
export default {
	data() {
		return {
			selectedId: 0,
			items: [],
			newData: [],
			options: {
				activeColor: '#ed435b',
				lineWidth: 3
			}
		};
	},

	components: {
		Header,
		Swiper,
		Icon,
		Recommend,
		Like,
		Ad,
		Tabbar
	},

	mounted() {
		new BetterScroll('.wrapper', {
			movable: true,
			zoom: true
		});
	},

	created() {
		this.getData();
	},

	methods: {
		async getData() {
			let res = await axios({
				url: '/api/index_list/0/data/1'
			});
			this.items = Object.freeze(res.data.data.topBar);
			this.newData = Object.freeze(res.data.data.data);
		},

		async addData(index) {
			let res = await axios({
				url: '/api/index_list/'+index+'/data/1'
			});
			
			if(res.data.data.constructor != Array){
				this.newData = res.data.data.data;
			}else{
				this.newData = res.data.data;
			}
		},

		changeTab(item, index) {
			this.addData(index);
		}
	}
};
</script>

<style scoped lang="scss">
.home {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

section {
	flex: 1;
	width: 100%;
	overflow: hidden;
}

.topBbar {
	background: #fff;
	display: flex;
}
::v-deep .ly-tabbar {
	box-shadow: none;
	font-weight: 500;
}
</style>
