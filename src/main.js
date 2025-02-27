// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';
import "babel-polyfill";
import store from '@/store/main.js';
//自定义全局mixin
import mixins from '@/common/mixins'
Vue.mixin(mixins)
//自定义全局指令
import directive from '@/common/directive'
Vue.use(directive)
//自定义组件
import WUI from '../packages/index'
Vue.use(WUI)

import '@/utils/componentRegister.js'



Vue.config.productionTip = false

import API_CONFIG from '@/api/index'
Vue.prototype.$API = API_CONFIG

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
