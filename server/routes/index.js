var express = require('express');
var router = express.Router();

// 链接数据库
var connection = require('../db/sql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

// 分类的数据
router.get('/api/goods/list', function(req, res, next) {
	res.send({
		code: 0,
		data: [

			{
				// 一级
				id: 0,
				name: '推荐',
				data: [{
					// 二级
					id: 0,
					name: '推荐',
					list: [
						// 三级
						{
							id: 0,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 1,
							name: '功夫茶具',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 2,
							name: '紫砂壶',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 3,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 4,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 5,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						}
					]
				}, ]
			},
			{
				// 一级
				id: 1,
				name: '绿茶',
				data: [{
					// 二级
					id: 0,
					name: '绿茶',
					list: [
						// 三级
						{
							id: 0,
							name: '龙剑',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 1,
							name: '碧螺粗',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 2,
							name: '紫砂壶',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 3,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 4,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 5,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 6,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						}
					]
				}, ]
			},
			{
				// 一级
				id: 2,
				name: '红茶',
				data: [{
					// 二级
					id: 0,
					name: '绿茶',
					list: [
						// 三级
						{
							id: 0,
							name: '龙剑',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 1,
							name: '碧螺粗',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 2,
							name: '紫砂壶',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 3,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 4,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 5,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						}
					]
				}, ]
			},
			{
				// 一级
				id: 3,
				name: '白茶',
				data: [{
					// 二级
					id: 0,
					name: '绿茶',
					list: [
						// 三级
						{
							id: 0,
							name: '龙剑',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 1,
							name: '碧螺粗',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 2,
							name: '紫砂壶',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 3,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 4,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 5,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						}
					]
				}, ]
			},
			{
				// 一级
				id: 4,
				name: '黑茶',
				data: [{
					// 二级
					id: 0,
					name: '绿茶',
					list: [
						// 三级
						{
							id: 0,
							name: '龙剑',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 1,
							name: '碧螺粗',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 2,
							name: '紫砂壶',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 3,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 4,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 5,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						}
					]
				}, ]
			},
			{
				// 一级
				id: 5,
				name: '奶茶',
				data: [{
					// 二级
					id: 0,
					name: '绿茶',
					list: [
						// 三级
						{
							id: 0,
							name: '龙剑',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 1,
							name: '碧螺粗',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 2,
							name: '紫砂壶',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 3,
							name: '铁观音',
							imgUrl: './images/listIcon1.jpg'
						},
						{
							id: 4,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						},
						{
							id: 5,
							name: '铁观音',
							imgUrl: './images/listIcon.jpg'
						}
					]
				}, ]
			}
		]
	});
});


// 查询商品数据接口
router.get('/api/goods/shopList', function(req, res, next) {
	// 前端给后端的数据
	let [searchName, orderName] = Object.keys(req.query);
	let [name, order] = Object.values(req.query);

	console.log(searchName, orderName)
	// 连接数据库模糊查询
	connection.query('SELECT * FROM goods_list WHERE name LIKE "%' + name + '%" order by ' + orderName + ' ' +
		order + ' ',
		function(error, results, rejects) {
			res.send({
				code: 0,
				data: results
			})
		})
});

router.get('/api/index_list/1/data/1', function(req, res, next) {
	res.send({
		code: 1,
		data: [{
				id: 1,
				type: 'adList',
				data: [{
						id: 1,
						imgUrl: './images/dhp.png'
					},
					{
						id: 2,
						imgUrl: './images/dhp1.jpg'
					}
				]
			},
			{
				id: 2,
				type: 'likeList',
				data: [
					{
						id: 1,
						imgUrl: './images/like1.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
					{
						id: 2,
						imgUrl: './images/like2.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
					{
						id: 3,
						imgUrl: './images/like3.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
					{
						id: 4,
						imgUrl: './images/like4.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
					{
						id: 5,
						imgUrl: './images/like1.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
				]
			}
		]
	})
})

router.get('/api/index_list/0/data/1', function(req, res, next) {
	res.send({
		code: 0,
		data: {
			topBar: [{
					id: 0,
					label: '首页'
				},
				{
					id: 1,
					label: '推荐'
				},
				{
					id: 2,
					label: '大红茶'
				},
				{
					id: 3,
					label: '绿茶'
				},
				{
					id: 4,
					label: '大红袍'
				},
				{
					id: 5,
					label: '铁观音'
				},
				{
					id: 6,
					label: '大师茶'
				}

			],
			data: [{
					id: 0,
					type: 'swiperList',
					// swiper数据
					data: [{
							id: 0,
							imgUrl: './images/swiper1.jpeg'
						},
						{
							id: 1,
							imgUrl: './images/swiper2.jpeg'
						},
						{
							id: 2,
							imgUrl: './images/swiper3.jpeg'
						},
						{
							id: 3,
							imgUrl: './images/swiper4.jpeg'
						}
					],

				},
				// icons数据
				{
					id: 1,
					type: 'iconsList',
					// swiper数据
					data: [{
							id: 1,
							imgUrl: './images/icon1.png',
							name: '自饮茶'
						},
						{
							id: 2,
							imgUrl: './images/icon2.png',
							name: '茶具'
						},
						{
							id: 3,
							imgUrl: './images/icon3.png',
							name: '茶礼盒'
						},
						{
							id: 4,
							imgUrl: './images/icon4.png',
							name: '领福利'
						},
						{
							id: 5,
							imgUrl: './images/icon5.png',
							name: '官方验证'
						}
					],

				},

				{
					id: 2,
					type: 'recommendList',
					// swiper数据
					data: [{
							id: 1,
							imgUrl: './images/recommend1.jpeg',
							name: '龙井1號铁罐250g',
							tag: '销冠',
							content: '鲜爽甘醇 口粮首选',
							price: 68
						},
						{
							id: 2,
							imgUrl: './images/recommend2.jpeg',
							name: '龙井1號铁罐250g',
							tag: '老铁',
							content: '鲜爽甘醇 口粮首选',
							price: 68
						}
					],

				},
				{
					id: 3,
					type: 'likeList',
					data: [{
							id: 1,
							imgUrl: './images/like.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 2,
							imgUrl: './images/like1.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 3,
							imgUrl: './images/like2.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 4,
							imgUrl: './images/like3.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 5,
							imgUrl: './images/like3.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 6,
							imgUrl: './images/like4.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 7,
							imgUrl: './images/like1.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 8,
							imgUrl: './images/like2.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 9,
							imgUrl: './images/like4.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
					]
				}
			],

		}
	})
})

module.exports = router;
