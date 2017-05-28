import Vue from 'vue'
import store from '@/store'
import AppGitHub from '@/pages/GitHub'

describe('GitHub.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-git-hub/>',
      components: { AppGitHub }
    }).$mount()
  })
})
