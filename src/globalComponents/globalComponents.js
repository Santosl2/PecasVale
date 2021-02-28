import Vue from 'vue'

Vue.component('navbar-global', () => import('../components/Others/Header.vue'))
Vue.component('footer-global', () => import('../components/Others/Footer.vue'))
Vue.component('user-menu', () => import('../components/User/Menu.vue'))
