import Vue from 'vue'
import store from '@/store'
import AppTweetsPerWeekday from '@/components/charts/TweetsPerWeekday'

describe('AppTweetsPerWeekday.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-tweets-per-weekday/>',
      components: { AppTweetsPerWeekday }
    }).$mount()
  })
})
