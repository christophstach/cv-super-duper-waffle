import Vue from 'vue'
import store from '@/store'
import '@/filters'
import AppCertificates from '@/components/Certificates'

describe('Certificates.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      store,
      template: '<app-certificates/>',
      components: { AppCertificates }
    }).$mount()

    expect(vm.$el.querySelector('.app-certificates > h3').textContent).to.equal('Certificates')
  })
})
