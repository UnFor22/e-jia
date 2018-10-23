import Vue from 'vue'
import App from './App'
import router from './router'
import heads from './components/header.vue'
import tabs from './components/footer'
import contents from './components/content'
import mains from './components/main'
import {$axios} from './utils/index.js'
import './assets/iconfont/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import { InfiniteScroll } from 'mint-ui'

Vue.use(MintUI)
Vue.use(InfiniteScroll)
// Vue.use(MessageBox)

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
  store,
  components: { App },
  template: '<App/>'
})
