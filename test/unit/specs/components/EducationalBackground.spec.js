import Vue from 'vue'
import store from '@/store'
import '@/filters'
import EducationalBackground from '@/components/EducationalBackground'

describe('EducationalBackground.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<EducationalBackground/>',
      components: { EducationalBackground }
    }).$mount()

    expect(vm.$el.querySelector('.app-educational-background > h3').textContent).to.equal('Educational background')
  })
})
