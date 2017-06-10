const mutations = {
  CLEAR_REPOS (state, data) {
    state.repos = []
  },
  SET_REPOS (state, data) {
    state.repos = [
      ...data
    ]
  },
  CLEAR_PROJECTS (state, data) {
    state.projects = []
  },
  SET_PROJECTS (state, data) {
    state.projects = [
      ...data
    ]
  },
  CLEAR_TWEETS_PER_HOUR (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.tweetsPerHour = []
  },
  SET_TWEETS_PER_HOUR (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.tweetsPerHour = [
      ...data
    ]
  },
  CLEAR_TWEETS_PER_WEEKDAY (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.tweetsPerWeekday = []
  },
  SET_TWEETS_PER_WEEKDAY (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.tweetsPerWeekday = [
      ...data
    ]
  },
  CLEAR_MOST_USED_HASH_TAGS (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.mostUsedHashTags = []
  },
  SET_MOST_USED_HASH_TAGS (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.mostUsedHashTags = [
      ...data
    ]
  },
  SET_TWITTER_PROJECT_FROM_DATE (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.fromDate = data
  },
  SET_TWITTER_PROJECT_TO_DATE (state, data) {
    state.projects.filter((p) => p.id === 'twitter').reduce((p, c) => c).data.toDate = data
  },
  API_FAILURE (state, data) {
    state.apiFailure = [
      ...state.apiFailure,
      data
    ]
  }
}

export default mutations
