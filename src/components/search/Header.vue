<template>
	<div class="header">
		<div class="arrow" @click="goBack">&lt;</div>
		<div class="search-inp">
			<img class="search-icon" src="../../assets/images/sousou.png" />
			<input class="search-put" type="text" v-model="searchVal" placeholder="搜索的内容" />
		</div>
		<div class="searchIcon"><span @click="goSeachList">搜索</span></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchVal: '',
			searchArr: []
		};
	},
	methods: {
		goBack() {
			this.$router.back();
		},
		goSeachList() {
			// 没有数据就直接返回
			if (!this.searchVal) return ;

			// 本地存储
			if (!localStorage.getItem('searchList')) {
				// 没有数据
				localStorage.setItem('searchList', '[]');
			} else {
				// 有数据把数据拿出来
				this.searchArr = JSON.parse(localStorage.getItem('searchList'));
			}
			
			// 增加数据
			this.searchArr.unshift(this.searchVal);
			
			// ES6去重
			let newArr = new Set(this.searchArr);

			// 本地存储赋值完成之后 转换成数组
			localStorage.setItem('searchList', JSON.stringify(Array.from(newArr)));

			
			// 跳转页面
			this.$router.push({
				name: 'list'
			});
		}
	}
};
</script>

<style scoped lang="scss">
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
}
.search-inp {
	color: #cccccc;
	background: #fff;
	display: flex;
	align-items: center;
	height: 1.875rem;
	width: 18.55rem;

	border-radius: 3.125rem;

	.search-icon {
		width: 0.825rem;
		height: 0.825rem;
		font-size: 1rem;
		margin-left: 1rem;
	}
	.search-put {
		height:1.75rem;
		padding-left: 0.625rem;
		outline: none;
		border: none;
	}
}
</style>
