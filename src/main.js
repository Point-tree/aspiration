import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080/Aspiration_war_exploded';
axios.defaults.timeout = 8000;

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, { loading: '/imgs/loading-bars.svg' })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
