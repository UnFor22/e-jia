// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import heads from './components/header.vue'
import tabs from './components/footer'
import contents from './components/content'
import mains from './components/main'
import {$axios} from './utils/index.js'
import './assets/iconfont/iconfont.css'


Vue.prototype.$axios = $axios
Vue.config.productionTip = false
Vue.component('heads', heads);
Vue.component('tabs', tabs);
Vue.component('contents', contents);
Vue.component('mains', mains);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
