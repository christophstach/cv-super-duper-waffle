import axios from 'axios'

const actions = {
  fetchRepos (context) {
    return axios.get('https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc')
      .then((response) => context.commit('SET_REPOS', response.data.items))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  sendEmail (context, payload) {

  }
}

export default actions
