import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import VeeValidate from 'vee-validate'
import dictionary from './dictionary'
import store from './store'

Vue.use(VueRouter)
Vue.use(VeeValidate, {
  dictionary: dictionary,
  locale: 'en'
})
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes //routes: routes
})
new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')