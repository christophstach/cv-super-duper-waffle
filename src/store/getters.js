const getters = {
  twitterProjectMostUsedHashTags: (state) => {
    return state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.mostUsedHashTags
  },
  twitterProjectTweetsPerHour: (state) => {
    return state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.tweetsPerHour
  },
  twitterProjectTweetsPerWeekday: (state) => {
    return state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.tweetsPerWeekday
  },
  twitterProjectFromDate: (state) => {
    return state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.fromDate
  },
  twitterProjectToDate: (state) => {
    return state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.toDate
  }
}

export default getters
