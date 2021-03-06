// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引用vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from "axios"
axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.$http=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
