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
