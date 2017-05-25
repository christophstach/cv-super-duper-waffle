import axios from 'axios'

const actions = {
  fetchRepos (context) {
    return axios.get('https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc')
      .then((response) => context.commit('SET_REPOS', response.data.items))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  fetchTwitterHashTags (context) {
    // let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/most-used-hash-tags-all'
    let url = '/api/most-used-hash-tags-all.json'
    return axios.get(url)
      .then((response) => context.commit('SET_TWITTER_HASHTAGS', response.data))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  sendEmail (context, payload) {
    console.error('Not implemented yet')
  }
}

export default actions
