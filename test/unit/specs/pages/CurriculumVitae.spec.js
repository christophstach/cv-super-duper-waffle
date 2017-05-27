import Vue from 'vue'
import store from '@/store'
import CurriculumVitae from '@/pages/CurriculumVitae'

describe('CurriculumVitea.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<CurriculumVitae/>',
      components: { CurriculumVitae }
    }).$mount()
  })
})
