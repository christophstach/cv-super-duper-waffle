import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects/',
      name: 'Projects',
      component: Projects
    }
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-9043429-10',
  router
})
Vue.use(Router)

export default router
