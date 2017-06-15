import { mapGetters } from 'vuex'
import { Bar } from 'vue-chartjs'

export default Bar.extend({
  name: 'app-tweets-per-hour',
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
            barThickness: 10,
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
      tweetsPerHour: 'twitterProjectTweetsPerHour'
    }),
    labels () {
      return [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23'
      ]
    },
    datasets () {
      return [
        {
          label: 'Tweets',
          backgroundColor: '#2196F3',
          data: this.tweetsPerHour
        }
      ]
    }
  }
})
