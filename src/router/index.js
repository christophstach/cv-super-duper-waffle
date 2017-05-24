import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import CurriculumVitae from '@/pages/CurriculumVitae'
import GitHub from '@/pages/GitHub'
import Projects from '@/pages/Projects'
import ProjectsTwitter from '@/pages/projects/Twitter'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CurriculumVitae',
      component: CurriculumVitae
    },
    {
      path: '/github/',
      name: 'GitHub',
      component: GitHub
    },
    {
      path: '/projects/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/twitter/',
      name: 'ProjectsTwitter',
      component: ProjectsTwitter
    }
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-9043429-10',
  router
})
Vue.use(Router)

export default router
