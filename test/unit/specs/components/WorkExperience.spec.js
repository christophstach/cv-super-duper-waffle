import Vue from 'vue'
import store from '@/store'
import '@/filters'
import WorkExperience from '@/components/WorkExperience'

describe('WorkExperience.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<WorkExperience/>',
      components: { WorkExperience }
    }).$mount()

    expect(vm.$el.querySelector('.app-work-experience > h3').textContent).to.equal('Work experience')
  })
})
