import Vue from 'vue'
import store from '@/store'
import AppTwitter from '@/pages/projects/Twitter'

describe('Twitter.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-twitter/>',
      components: { AppTwitter }
    }).$mount()
  })
})
