import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import Buefy from 'buefy'
import store from './store/index'

import 'buefy/dist/buefy.css'

import './globalComponents/globalComponents.js'


Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
