import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/list',
		name: 'List',
		component: () => import('../views/List.vue')
	},
	{
		path: '/tea',
		name: 'Tea',
		component: () => import('../views/Tea.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart.vue')
	},
	{
		path: '/my',
		name: 'My',
		component: () => import('../views/My.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
