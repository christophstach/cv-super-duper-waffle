import Vue from 'vue'
import store from '@/store'
import AppTweetsPerWeekdayChart from '@/components/charts/TweetsPerWeekdayChart'

describe('AdditionalSkills.vue', () => {
  it('should render correct contents', () => {
    new Vue({
      store,
      template: '<app-tweets-per-weekday-chart/>',
      components: { AppTweetsPerWeekdayChart }
    }).$mount()
  })
})
