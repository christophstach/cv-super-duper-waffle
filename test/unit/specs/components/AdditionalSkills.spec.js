import Vue from 'vue'
import store from '@/store'
import AppAdditionalSkills from '@/components/AdditionalSkills'

describe('AdditionalSkills.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<app-additional-skills/>',
      components: { AppAdditionalSkills }
    }).$mount()

    expect(vm.$el.querySelector('.app-additional-skills > h3').textContent).to.equal('Additional Skills')
  })
})
