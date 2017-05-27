import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import Navigation from '@/layouts/material/Navigation'

describe('Navigation.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      router,
      template: '<Navigation/>',
      components: { Navigation }
    }).$mount()
  })
})
