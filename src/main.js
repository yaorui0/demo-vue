import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {fetch} from './axios/api.js'
import {fetchGet} from './axios/api.js'
Vue.prototype.$fetch= fetch 
Vue.prototype.$fetchGet= fetchGet 
Vue.config.productionTip = false

require("./mock.js")
Vue.use(ElementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
