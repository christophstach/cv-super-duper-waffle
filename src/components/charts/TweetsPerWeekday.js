import { mapState, mapActions } from 'vuex'
import moment from 'moment'
import { Bar } from 'vue-chartjs'

export default Bar.extend({
  name: 'app-tweets-per-weekday',
  props: ['options'],
  mounted () {
    this.fetchTweetsPerWeekday().then(() => {
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
    }, () => {})
  },
  computed: {
    ...mapState(['tweetsPerWeekday']),
    labels () {
      return [
        moment('1988-02-15').format('dddd'), // Monday
        moment('1988-02-16').format('dddd'), // Tuesday
        moment('1988-02-17').format('dddd'), // Wednesday
        moment('1988-02-18').format('dddd'), // Thursday
        moment('1988-02-19').format('dddd'), // Friday
        moment('1988-02-20').format('dddd'), // Saturday
        moment('1988-02-21').format('dddd')  // Sunday
      ]
    },
    datasets () {
      return [
        {
          label: 'All Tweets',
          backgroundColor: '#2196F3',
          data: this.tweetsPerWeekday
        }
      ]
    }
  },
  methods: {
    ...mapActions(['fetchTweetsPerWeekday'])
  }
})
