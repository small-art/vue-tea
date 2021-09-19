import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 全局引入css
import '@/assets/css/common.css'

// 淘宝适配
import '@/assets/js/flexible.js'

// iconfont 图标库全局引入
import '@/assets/css/iconfont.css'

// vantui库
import Vant from 'vant';
import 'vant/lib/index.css';

// swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(Vant);

// 滑动效果
import LyTab from 'ly-tab'
Vue.use(LyTab)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
