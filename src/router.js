import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import signIntent from './pages/signIntent'
import searchSchool from './pages/searchSchool'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/signIntent',
          name: 'signIntent',
          component: signIntent,
        },
        {
          path: '/searchSchool',
          name: 'searchSchool',
          component: searchSchool,
        }
      ]
    }
  ]
})