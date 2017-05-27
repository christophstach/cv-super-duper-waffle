import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import Layout from '@/layouts/material/Layout'

describe('Layout.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      router,
      template: '<Layout/>',
      components: { Layout }
    }).$mount()
  })
})
