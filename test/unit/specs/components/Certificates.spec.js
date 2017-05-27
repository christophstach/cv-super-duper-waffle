import Vue from 'vue'
import store from '@/store'
import '@/filters'
import Certificates from '@/components/Certificates'

describe('Certificates.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<Certificates/>',
      components: { Certificates }
    }).$mount()

    expect(vm.$el.querySelector('.app-certificates > h3').textContent).to.equal('Certificates')
  })
})
