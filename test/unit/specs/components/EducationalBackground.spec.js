import Vue from 'vue'
import store from '@/store'
import '@/filters'
import AppEducationalBackground from '@/components/EducationalBackground'

describe('EducationalBackground.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<app-educational-background/>',
      components: { AppEducationalBackground }
    }).$mount()

    expect(vm.$el.querySelector('.app-educational-background > h3').textContent).to.equal('Educational Background')
  })
})
