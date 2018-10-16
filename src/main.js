import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import {currency} from '@/currency'
// import axios from 'axios'currency
// import router from './router'

Vue.config.productionTip = false
Vue.filter('currency', currency)
/* eslint-disable no-new */

Vue.component('app', App)

new Vue({
  store,
  el: '#app',
})
