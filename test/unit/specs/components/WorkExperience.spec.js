import Vue from 'vue'
import store from '@/store'
import '@/filters'
import AppWorkExperience from '@/components/WorkExperience'

describe('WorkExperience.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<app-work-experience/>',
      components: { AppWorkExperience }
    }).$mount()

    expect(vm.$el.querySelector('.app-work-experience > h3').textContent).to.equal('Work experience')
  })
})
