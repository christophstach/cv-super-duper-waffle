import moment from 'moment-timezone'

let fromDate = moment().startOf('day')
let toDate = moment().endOf('day')

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
