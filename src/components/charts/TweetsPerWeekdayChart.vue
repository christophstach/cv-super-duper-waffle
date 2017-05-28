<template>
  <div class="app-tweets-per-weekday">
    <app-bar-chart :labels="labels" :datasets="datasets"/>
  </div>
</template>

<script>
import moment from 'moment'
import AppBarChart from '@/components/charts/BarChart'

export default {
  name: 'app-tweets-per-weekday',
  components: {
    AppBarChart
  },
  computed: {
    labels () {
      return [
        moment('1988-02-15').format('ddd'), // Monday
        moment('1988-02-16').format('ddd'), // Tuesday
        moment('1988-02-17').format('ddd'), // Wednesday
        moment('1988-02-18').format('ddd'), // Thursday
        moment('1988-02-19').format('ddd'), // Friday
        moment('1988-02-20').format('ddd'), // Saturday
        moment('1988-02-21').format('ddd')  // Sunday
      ]
    },
    datasets () {
      return [
        {
          label: 'All Tweets',
          backgroundColor: '#2196F3',
          data: [40, 20, 12, 39, 10, 40, 39]
        },
        {
          label: 'Retweets',
          backgroundColor: '#F87979',
          data: [40, 20, 12, 39, 10, 40, 39]
        }
      ]
    }
  }
}
</script>
