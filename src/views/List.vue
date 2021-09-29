<template>
	<div class="list">
		<div class="header">
			<div class="arrow" @click="goBack">&lt;</div>
			<div class="search-inp">
				<img class="search-icon" src="../assets/images/sousou.png" />
				<span class="search-inp">搜你喜欢的...</span>
			</div>
			<div class="searchIcon"><i class="iconfont icon-home"></i></div>
		</div>

		<section>
			<div class="list-l" ref="left">
				<ul class="l-item">
					<li :class="{ active:index == currentIndex }" v-for="(item, index) in leftData" :key="index" @click="goScroll(index)">{{ item.name }}</li>
				</ul>
			</div>
			<div class="list-r" ref="right">
				<div>
					<img class="list-img" src="../assets/images/0149844_0.png" />
					<ul class="list-content" v-for="(item, index) in rightData" :key="index">
						<li class="shop-list" v-for="(k, i) in item" :key="i">
							<h2 class="list-title">{{ k.name }}</h2>
							<ul class="list-items">
								<li class="list-card-item" v-for="(j, idx) in k.list" :key="idx">
									<img :src="j.imgUrl" />
									<div class="list-name">{{ j.name }}</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue';
import http from '@/common/api/request.js';
import BetterScroll from 'better-scroll';
export default {
	data() {
		return {
			leftData: [],
			rightData: [],
			betterScroll: '',
			allHeight: [], //承载右侧的高度值
			scrollY: '' //右侧滚动距离
		};
	},

	computed: {
		currentIndex() {
			return this.allHeight.findIndex((item,index) => {
				return this.scrollY >= item && this.scrollY < this.allHeight[index+1];
			});
		}
	},
	components: {
		Tabbar
	},

	async created() {
		let res = await http.$axios({
			url: '/api/goods/list'
		});

		let leftArr = [];
		let rightArr = [];

		res.forEach(v => {
			leftArr.push({
				id: v.id,
				name: v.name
			});
			rightArr.push(v.data);
		});
		this.leftData = leftArr;
		this.rightData = rightArr;

		this.$nextTick(() => {
			// BetterScroll 默认 取消 click 0
			new BetterScroll(this.$refs.left, {
				click: true
			});
			this.betterScroll = new BetterScroll(this.$refs.right, {
				click: true,
				probeType: 3
			});

			// 统计右侧高度，放入数组中
			let height = 0;
			this.allHeight.push(height);

			// 获取右侧每一块的高度
			let uls = this.$refs.right.getElementsByClassName('list-content');

			// dom对象转换成功真正的数组
			Array.from(uls).forEach(v => {
				height += v.clientHeight;

				this.allHeight.push(height);
			});

			// console.log(this.allHeight)
			this.betterScroll.on('scroll', pos => {
				this.scrollY = Math.abs(pos.y);
				console.log(pos);
			});
		});
	},

	methods: {
		goBack() {
			this.$router.push('/');
		},

		golikeList() {},
		goScroll(index) {
			this.betterScroll.scrollTo(0, -this.allHeight[index], 200);
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
	overflow: hidden;

	.header {
		display: flex;
		justify-content: space-between;
		padding: 0 0.7rem;
		color: #fff;
		background-color: #b0352f;
		font-size: 1rem;
		align-items: center;
		line-height: 2.75rem;
		text-align: center;
		.arrow {
			font-size: 1.25rem;
			transform: scale(1.5);
			opacity: 0.5;
		}

		.search-inp {
			color: #666;
			background: #fff;
			display: flex;
			align-items: center;
			height: 1.875rem;
			width: 18.55rem;
			border-radius: 3.125rem;

			.search-icon {
				width: 0.825rem;
				height: 0.825rem;
				font-size: 1.6rem;
				margin-left: 1rem;
				margin-right: 0.3125rem;
			}
		}
		.iconfont {
			font-size: 1.2rem;
		}
	}

	section {
		display: flex;
		flex: 1;
		overflow: hidden;
		text-align: center;
		.list-l {
			width: 6.48rem;
			background-color: #fff;
			overflow: hidden;
			border-right: 1px solid #ccc;
			margin-top: 0.25rem;

			.l-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				li {
					margin: 0.625rem 0;
					width: 100%;
					line-height: 1.6rem;
					font-size: 1rem;
				}

				.active {
					border-left: 5px solid orange;
					color: red;
				}
			}
		}
		.list-r {
			display: flex;
			flex-direction: column;
			padding: 0.625rem;
			font-size: 0.7375rem;

			.list-img {
				margin-top: 0.625rem;
				width: 16.3125rem;
				height: 7rem;
			}

			.list-content {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-top: 1.625rem;

				.list-title {
					position: relative;
				}
				.list-title::before {
					content: '';
					position: absolute;
					width: 1.25rem;
					top: 0.625rem;
					left: 3.225rem;
					height: 0.0625rem;
					background: orange;
				}

				.list-title::after {
					content: '';
					position: absolute;
					width: 1.25rem;
					top: 0.625rem;
					left: 8rem;
					height: 0.0625rem;
					background: orange;
				}

				.list-items {
					display: flex;
					margin: 1.625rem 0;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 12.5rem;
					li {
						margin: 0.625rem 0;
					}
					img {
						width: 3.3125rem;
						height: 3.3125rem;
					}
				}
			}
		}
	}
}
</style>
