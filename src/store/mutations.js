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
    state.tweetsPerHour = []
  },
  SET_TWEETS_PER_HOUR (state, data) {
    state.tweetsPerHour = [
      ...data
    ]
  },
  CLEAR_TWEETS_PER_WEEKDAY (state, data) {
    state.tweetsPerWeekday = []
  },
  SET_TWEETS_PER_WEEKDAY (state, data) {
    state.tweetsPerWeekday = [
      ...data
    ]
  },
  CLEAR_TWITTER_HASHTAGS (state, data) {
    state.twitterHashTags = []
  },
  SET_TWITTER_HASHTAGS (state, data) {
    state.twitterHashTags = [
      ...data
    ]
  },
  API_FAILURE (state, data) {
    state.apiFailure = [
      ...state.apiFailure,
      data
    ]
  }
}

export default mutations
