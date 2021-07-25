import Vue from 'vue'
import Router from 'vue-router'

// APP
import SignIn from './views/SignIn'
import HomePage from './views/HomePage'
import User from './views/userManagement/User'
import Permission from './views/userManagement/Permission'

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
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/permission',
      name: 'Permission',
      component: Permission
    },
  ]
})
