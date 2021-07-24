import Vue from 'vue'
import Router from 'vue-router'

// APP
import SignIn from './views/SignIn'
import HomePage from './views/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    },
  ]
})
