import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-ua'
import Home from '@/components/Home'
import Projects from '@/components/Projects'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})

Vue.use(Router)
Vue.use(VueAnalytics, {
  appName: 'christophstach.github.io',
  trackingId: 'UA-9043429-10',
  appVersion: '1.0.0',
  vueRouter: router
})

export default router
