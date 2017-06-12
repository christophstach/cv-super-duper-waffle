let today = new Date()
let oneWeekAgo = new Date()
oneWeekAgo.setDate(today.getDate() - 6)

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
      toDate: today,
      tweetsPerHour: [],
      tweetsPerWeekday: [],
      mostUsedHashTags: []
    }
  }
]
