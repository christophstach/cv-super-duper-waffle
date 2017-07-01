import moment from 'moment-timezone'

// let yesterday = moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0}).tz('UTC')
// let oneWeekAgo = moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0}).tz('UTC')
let yesterday = moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0}).tz('Europe/Berlin')
let oneWeekAgo = moment({hour: 0, minute: 0, seconds: 0, milliseconds: 0}).tz('Europe/Berlin')

oneWeekAgo.subtract(6, 'day')
yesterday.subtract(1, 'millisecond')

export default [
  {
    id: 'twitter',
    image: 'Twitter_Logo_White_On_Blue.png',
    title: 'Data science with Twitter',
    description: 'A project we are currently doing at university. It shows different analyses about Twitter.',
    link: '/projects/twitter/',
    data: {
      fromDate: oneWeekAgo.toDate(),
      toDate: yesterday.toDate(),
      tweetsPerHour: [],
      tweetsPerWeekday: [],
      mostUsedHashTags: []
    }
  }
]
