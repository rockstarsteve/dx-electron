import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('@/views/login/login').default
    },
    {
      path: '/',
      name: 'main',
      component: require('@/views/main/main').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
