import Vue from 'vue'
import store from '@/store'
import Foot from '@/layouts/material/Foot'

describe('Foot.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<Foot/>',
      components: { Foot }
    }).$mount()
  })
})
