<template>
	<div class="home">
		<Header></Header>
		<ly-tab v-model="selectedId" :items="items" :options="options" class="topBbar"></ly-tab>
		<section>
			<Swiper></Swiper>
			<Icon></Icon>
			<Recommend></Recommend>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import Tabbar from '@/components/common/Tabbar.vue';
import Swiper from '@/components/home/Swiper.vue';
import Icon from '@/components/home/Icon.vue';
import Recommend from '@/components/home/Recommend.vue'

export default {
	data() {
		return {
			selectedId: 0,
			items: [{ label: '首页' }, { label: '推荐' }, { label: '大红茶' }, { label: '绿茶' }, { label: '大红袍' }, { label: '铁观音' }, { label: '大师茶' }],
			options: {
				activeColor: '#ed435b',
				lineWidth: 3
			}
		};
	},
	components: {
		Header,
		Tabbar,
		Swiper,
		Icon,
		Recommend
	}
};
</script>

<style scoped>
.home {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
}

section{
	flex: 1;
}

.topBbar {
	position: fixed;
	margin-top: 2.8rem;
}

::v-deep .ly-tabbar {
	box-shadow: none;
	font-weight: 500;
	text-align: center;
}

::v-deep .ly-tab-item {
	padding-left: 0.8125rem;
}
::v-deep .ly-tab-item-icon {
	width: 1.875rem;
}
</style>
