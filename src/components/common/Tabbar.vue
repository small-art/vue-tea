<template>
	<div class="tabbar">
		<ul class="tabbar-content">
			<li v-for="(item, index) in routerList" :key="index" @click="switchTab(item.path)">
				<img :src="$route.path.includes(item.path) ? item.selected : item.active" />
				<span :class='$route.path.includes(item.path) ? "actives" : "" '>{{ item.title }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			routerList: [
				{
					title: '首页',
					path: '/home',
					active: './images/home.png',
					selected: './images/homeSelect.png'
				},
				{
					title: '分类',
					path: '/list',
					active: './images/list.png',
					selected: './images/listSelect.png'
				},
				{
					title: '功夫茶',
					path: '/tea',
					active: './images/tea.png',
					selected: './images/teaSelect.png'
				},
				{
					title: '购物车',
					path: '/cart',
					active: './images/cart.png'
				},
				{
					title: '我的',
					path: '/my',
					active: './images/my.png',
					selected: './images/mySelect.png'
				}
			]
		};
	},
	methods: {
		switchTab(path) {
			// 判断当前路由重复点击 同一个路由 直接return
			if (this.$route.path == path) return;

			// 跳转页面
			this.$router.replace(path);
		}
	}
};
</script>

<style scoped>
.tabbar {
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 999;
	height: 3.4rem;
	border-top: 1px solid #ccc;
	background-color: #fff;
	text-align: center;
}

.tabbar-content {
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 0.75rem;
	font-weight: 500;
}

.tabbar-content li {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5125rem 0;
}

.tabbar-content li img {
	width: 1.8rem;
	height: 1.5rem;
}

.actives {
	color: darkorange;
}
</style>
