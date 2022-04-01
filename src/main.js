import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/plugins/vant/index.js'
import moment from "moment"
// im
import  "./plugins/im"
// iphonex 100vh高度问题
import vhCheck from 'vh-check'
vhCheck()
Vue.config.productionTip = false
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
