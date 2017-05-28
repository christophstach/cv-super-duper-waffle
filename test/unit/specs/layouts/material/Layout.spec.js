import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import AppLayout from '@/layouts/material/Layout'

describe('Layout.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      router,
      template: '<app-layout/>',
      components: { AppLayout }
    }).$mount()
  })
})
