import Vue from 'vue'
import store from '@/store'
import AppFoot from '@/layouts/material/Foot'

describe('Foot.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-foot/>',
      components: { AppFoot }
    }).$mount()
  })
})
