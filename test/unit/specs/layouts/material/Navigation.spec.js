import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import AppNavigation from '@/layouts/material/Navigation'

describe('Navigation.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      router,
      template: '<app-navigation/>',
      components: { AppNavigation }
    }).$mount()
  })
})
