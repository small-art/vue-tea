import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 全局引入css
import './assets/css/common.css'
import './assets/js/flexible.js'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
