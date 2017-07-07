import moment from 'moment-timezone'

// let fromDate = moment().endOf('day').substract(1, 'day').tz('UTC')
// let toDate = moment().startOf('day').subtract(7, 'day').tz('UTC')
let fromDate = moment().endOf('day').tz('UTC')
let toDate = moment().startOf('day').tz('UTC')

export default [
  {
    id: 'twitter',
    image: 'Twitter_Logo_White_On_Blue.png',
    title: 'Data science with Twitter',
    description: 'A project we are currently doing at university. It shows different analyses about Twitter.',
    link: '/projects/twitter/',
    data: {
      fromDate: fromDate.toDate(),
      toDate: toDate.toDate(),
      tweetsPerHour: [],
      tweetsPerWeekday: [],
      mostUsedHashTags: []
    }
  }
]
