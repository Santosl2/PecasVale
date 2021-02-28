import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import Buefy from 'buefy'
import store from './store/index'
import axios from 'axios'
import { apiUrl } from '../config.json';

import './globalComponents/globalComponents.js'
import 'buefy/dist/buefy.css'

const api = axios.create({
  baseURL: apiUrl 
});

Vue.prototype.$http = api; 

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
