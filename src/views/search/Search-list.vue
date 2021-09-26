<template>
	<div class="list">
		<Header></Header>
		<section>
			<div class="list-item">
				<div class="sales" v-for="(item, index) in searchList.data" :key="index" @click="changeTab(index)">
					<span :class="searchList.currentIndex === index ? 'active' : ''">{{ item.name }}</span>
					<div class="sales-item" v-if="index != 0">
						<i class="iconfont icon-arrow_up_fat" :class="item.status == 1 ? 'active' : ''"></i>
						<i class="iconfont icon-xiajiantou" :class="item.status == 2 ? 'active' : ''"></i>
					</div>
				</div>
			</div>

			<ul class="box" v-if="goodsList.length">
				<li v-for="(item, index) in goodsList" :key="index">
					<div>
						<img :src="item.imgUrl" alt="" />
						<h2>{{ item.name }}</h2>
						<div>
							<span>￥</span>
							<span>{{ item.price }}</span>
							<span>立即购买</span>
						</div>
					</div>
				</li>
			</ul>
				<h1 v-else>暂无数据</h1>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue';
import Header from '@/components/search/Header.vue';
import http from '@/common/api/request.js';
export default {
	data() {
		return {
			goodsList: [],
			searchList: {
				currentIndex: 0,
				// 0 1 2 不亮 上箭头亮 下箭头亮 asc desc
				data: [
					{ name: '综合',key:'zh' },
					{ name: '价格', status: 0 ,key:'price'},
					{ name: '销量', status: 0 ,key:'num'}
					]
			}
		};
	},
	
	computed:{
		orderBy(){
			// 知道当前是哪一个对象
			let obj = this.searchList.data[this.searchList.currentIndex];
			
			// 针对于状态，判断是升序还是降序
			let val = obj.status == '1' ? 'asc' : 'desc';
			return{
				[obj.key] : val
			}
		}
	},
	
	components: {
		Tabbar,
		Header
	},

	created() {
		this.getData();
	},

	methods: {
		getData() {
			http.$axios({
				url: '/api/goods/shopList',
				params: {
					searchName: this.$route.query.key,
					...this.orderBy
				}
			}).then(res => {
				this.goodsList = res;
			});
		},

		changeTab(index) {
			//点击的下标对应的值添加颜色
			this.searchList.currentIndex = index;

			let item = this.searchList.data[index];
			// 取消所有的状态
			this.searchList.data.forEach((v,i)=>{
				if(i != index ){
					v.status = 0;
				}
			})
			
			// 当前点击的改变状态
			if(index == this.searchList.currentIndex){
				item.status = item.status == 1 ? 2 : 1;
			}
			
			// 发送请求进行数据排序
			this.getData();
		}
	},

	watch: {
		$route() {
			this.getData();
		}
	}
};
</script>

<style scoped lang="scss">
.list {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
}
section {
	flex: 1;
	.list-item {
		display: flex;
		font-size: 1rem;
		padding: 0.5rem;
		justify-content: space-around;
		align-items: center;
		.sales {
			display: flex;
			justify-content: center;
			align-items: center;

			.sales-item {
				display: flex;
				flex-direction: column;
				padding: 0 0.25rem;
				transform: scale(0.8);
			}
		}
	}
	.box {
		display: flex;
		font-size: 0.9375rem;
		flex-wrap: wrap;
		padding: 0 0.3125rem;
		li {
			display: flex;
			width: 50%;
			border: 1px solid;
			border-color: transparent orange orange transparent;
		}
		li:nth-child(2n) {
			border-color: transparent transparent orange transparent;
		}
		img {
			width: 100%;
		}
	}
}
.active {
	color: orange;
}
</style>
