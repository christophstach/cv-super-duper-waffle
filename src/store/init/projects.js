let yesterday = new Date()
let oneWeekAgo = new Date()
yesterday.setDate(new Date().getDate() - 1)
yesterday.setHours(0)
yesterday.setMinutes(0)
yesterday.setSeconds(0)
yesterday.setMilliseconds(0)

oneWeekAgo.setDate(yesterday.getDate() - 6)
oneWeekAgo.setHours(0)
oneWeekAgo.setMinutes(0)
oneWeekAgo.setSeconds(0)
oneWeekAgo.setMilliseconds(0)

export default [
  {
    id: 'twitter',
    image: 'Twitter_Logo_White_On_Blue.png',
    title: 'Data science with Twitter',
    description: 'A project we are currently doing at university. It shows different analyses about Twitter.',
    hint: 'Currently displaying fake data',
    link: '/projects/twitter/',
    data: {
      fromDate: oneWeekAgo,
      toDate: yesterday,
      tweetsPerHour: [],
      tweetsPerWeekday: [],
      mostUsedHashTags: []
    }
  }
]
