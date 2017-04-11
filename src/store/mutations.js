const mutations = {
  CLEAR_REPOS (state, data) {
    state.repos = []
  },
  SET_REPOS (state, data) {
    state.repos = [
      ...data
    ]
  },
  API_FAILURE (state, data) {
    state.apiFailure = {
      ...data
    }
  }
}

export default mutations
