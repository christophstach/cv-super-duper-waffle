const actions = {
  fetchRepos (context) {
    return fetch('https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc')
      .then((response) => response.json())
      .then((json) => context.commit('SET_REPOS', json.items))
      .catch((error) => context.commit('API_FAILURE', error))
  }
}

export default actions
