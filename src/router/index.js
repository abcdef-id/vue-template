import Vue from 'vue'
import Router from 'vue-router'

// APP
import SignIn from '../views/SignIn'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
  ]
})
