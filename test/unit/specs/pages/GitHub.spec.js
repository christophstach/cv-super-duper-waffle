import Vue from 'vue'
import store from '@/store'
import GitHub from '@/pages/GitHub'

describe('GitHub.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<GitHub/>',
      components: { GitHub }
    }).$mount()
  })
})
