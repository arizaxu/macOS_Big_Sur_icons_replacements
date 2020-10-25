import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import store from './store/store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.1,
  loading: '',
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
