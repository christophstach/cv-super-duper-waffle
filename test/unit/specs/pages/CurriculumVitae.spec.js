import Vue from 'vue'
import store from '@/store'
import AppCurriculumVitae from '@/pages/CurriculumVitae'

describe('CurriculumVitea.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-curriculum-vitae/>',
      components: { AppCurriculumVitae }
    }).$mount()
  })
})
