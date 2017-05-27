import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (value, format = 'DD MMM YYYY') => {
  return moment(value).format(format)
})
