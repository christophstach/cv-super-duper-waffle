import { mapGetters } from 'vuex'
import moment from 'moment'
import { Bar } from 'vue-chartjs'

export default Bar.extend({
  name: 'app-tweets-per-weekday',
  props: ['options'],
  mounted () {
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      gridLines: {
        display: true,
        color: '#FF0000'
      },
      scales: {
        xAxes: [
          {
            barThickness: 30,
            gridLines: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true
            }
          }
        ]
      }
    }

    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets
      },
      {
        ...defaultOptions,
        ...this.options

      }
    )
  },
  computed: {
    ...mapGetters({
      tweetsPerWeekday: 'twitterProjectTweetsPerWeekday'
    }),
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
          label: 'Tweets',
          backgroundColor: '#2196F3',
          data: this.tweetsPerWeekday
        }
      ]
    }
  }
})
