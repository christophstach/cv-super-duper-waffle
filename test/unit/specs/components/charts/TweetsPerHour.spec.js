import Vue from 'vue'
import store from '@/store'
import AppTweetsPerHour from '@/components/charts/TweetsPerHour'

describe('AppTweetsPerHour.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-tweets-per-hour/>',
      components: { AppTweetsPerHour }
    }).$mount()
  })
})
