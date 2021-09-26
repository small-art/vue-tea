<template>
	<div class="search">
		<Header></Header>
		<section>
			<div v-if="searchArr.length">
				<div class="hot">
					<TitleIcon></TitleIcon>
					<i class="iconfont icon-laji" @click="remove"></i>
				</div>
				<ul class="search-item">
					<li v-for="(item, index) in searchArr" :key="index" @click="gosearchList(item)">{{ item }}</li>
				</ul>
			</div>

			<div v-else class="empty">暂无搜索记录....</div>

			<TitleIcon>
				<i class="iconfont icon-jurassic_zan"></i>
				<span>相关推荐</span>
			</TitleIcon>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>
<script>
import { Dialog } from 'vant';
import Header from '@/components/search/Header.vue';
import TitleIcon from '@/components/search/TitleIcon.vue';
import Tabbar from '@/components/common/Tabbar.vue';

export default {
	data() {
		return {
			searchArr: [],
			Dialog: ''
		};
	},

	methods: {
		remove() {
			Dialog.confirm({
				message: '确定要删除吗'
			})
			.then(() => {
				localStorage.removeItem('searchList');
				this.searchArr = [];
			})
			.catch(() => {});
		},
		gosearchList(item){
			this.$router.push({
				name:'list',
				query:{
					key:item
				}
			})
		}
	},

	created() {
		this.searchArr = JSON.parse(localStorage.getItem('searchList')) || [];
	},

	components: {
		Header,
		TitleIcon,
		Tabbar
	}
};
</script>

<style scoped lang="scss">
.search {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
}
section {
	flex: 1;
	overflow: hidden;

	.hot {
		display: flex;
		justify-content: space-between;
		.iconfont {
			margin: 1.25rem;
		}
	}
	.search-item {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		font-size: 1rem;
		width: 10.5rem;
		margin-left: 1.25rem;
		li {
			border: 1px solid #ccc;
			padding: 0.225rem 0.3125rem;
			margin-right: 1.25rem;
			margin-bottom: 1.25rem;
		}
	}
	.empty {
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		padding: 1.875rem 1.25rem;
	}
}
</style>
