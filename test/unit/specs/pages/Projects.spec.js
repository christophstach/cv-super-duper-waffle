import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import AppProjects from '@/pages/Projects'

describe('Projects.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      router,
      template: '<app-projects/>',
      components: { AppProjects }
    }).$mount()
  })
})
