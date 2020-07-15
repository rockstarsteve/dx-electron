import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/views/login/index').default
    },
    {
      path: '/layout',
      name: 'layout',
      component: require('@/views/layout/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
