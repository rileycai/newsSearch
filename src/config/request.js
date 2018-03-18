import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//导入封装的回调函数
import {
	cbs,
	gbs
} from './settings.js';


//动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = gbs.host;


/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，等需要
 */
var ajax = function(type, url, data, fn, tokenFlag, errFn) {

	this.$store.dispatch('show_loading');

	tokenFlag=true;
	if (type === 'get') {
		var datas = {
			params: data
		};
	} else {
		var datas = data;
	}

	Vue.axios[type](url, datas).then((res) => {
		if (res.status === 200 || res.status ===201) {
			fn(res.data);
		} else {
			//调用全局配置错误回调
			cbs.statusError.call(this, res.data);

			if (tokenFlag === true) {
				errFn && errFn.call(this);
			}
		}
		this.$store.dispatch('hide_loading');
	}).catch((err) => {
		 console.log(err);
		//调用全局配置错误回调
		this.$store.dispatch('hide_loading');
		cbs.requestError.call(this, err);
	});
};


/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
module.exports = {
	/**
   * 接口
   * @type {Object}
   */
  list: {
    /**
     * 查询
     * @param  {object}   data 参数
     * @param  {Function} fn   成功回调
     */
     getNewsList(data, fn) {
      ajax.call(this, 'get', '/cx', data, fn);
    },
		/**
		 * 相似查询
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		relateQuery(data, fn) {
		 ajax.call(this, 'get', '/similar_query', data, fn);
	 },

	 /**
		* 相关新闻
		* @param  {object}   data 参数
		* @param  {Function} fn   成功回调
		*/
	 relateNews(data, fn) {
		ajax.call(this, 'get', '/similar_news', data, fn);
	},

	/**
	 * 评论
	 * @param  {object}   data 参数
	 * @param  {Function} fn   成功回调
	 */
	getComments(data, fn) {
	 ajax.call(this, 'get', '/comments', data, fn);
 },

},

};
