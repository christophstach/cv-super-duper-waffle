import Vue from 'vue'
import store from '@/store'
import Twitter from '@/pages/projects/Twitter'

describe('Twitter.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<Twitter/>',
      components: { Twitter }
    }).$mount()
  })
})
