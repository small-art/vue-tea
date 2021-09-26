// import Vue from 'vue';
// import { mapState } from 'vuex';
// Vue.use(mapState)
// 没有基础不能使用axios
import axios from 'axios';
export default {

	common: {
		method: 'GET',
		data: {},
		params: {}
	},
	$axios(options = {}) {

		options.method = options.method || this.common.method;
		options.data = options.data || this.common.data;
		options.params = options.params || this.common.params;

		// 数据请求前

		return axios(options).then(v => {
			let data = v.data.data;
			return new Promise((res, rej) => {
				if (!v) return rej();
				// 请求结束后
				// setTimeout(()=>{},2000)
				res(data);
			})
		})
	}


}
