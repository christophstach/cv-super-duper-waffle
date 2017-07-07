import moment from 'moment-timezone'

let yesterday = moment().endOf('day').tz('UTC')
let oneWeekAgo = moment().startOf('day').subtract(6, 'day').tz('UTC')
// let yesterday = moment().tz('Europe/Berlin').endOf('day')
// let oneWeekAgo = moment().tz('Europe/Berlin').startOf('day').subtract(6, 'day')

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
