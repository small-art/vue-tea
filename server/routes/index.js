var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
router.get('/api/index_list/1/data/1', function(req, res, next) {
	res.send({
		data:[
			{
				id:1,
				type:'adList',
				data:[
					{id:1,imgUrl:'./images/ad.png'},
					{id:2,imgUrl:'./images/ad.png'}
				]
			},
			{
				id: 2,
				type: 'likeList',
				data: [{
						id: 1,
						imgUrl: './images/like.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
					{
						id: 2,
						imgUrl: './images/like.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					},
					{
						id: 3,
						imgUrl: './images/like.jpg',
						name: '安吉雨前珍稀白茶1号',
						price: '333'
					}
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
							imgUrl: './images/like.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						},
						{
							id: 3,
							imgUrl: './images/like.jpg',
							name: '安吉雨前珍稀白茶1号',
							price: '333'
						}
					]
				}
			],

		}
	})
})

module.exports = router;
