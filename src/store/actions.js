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
  fetchTweetsPerHour (context) {
    // let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/most-used-hash-tags-all'
    let url = '/api/tweets-per-hour.json'
    return axios.get(url)
      .then((response) => context.commit('SET_TWEETS_PER_HOUR', response.data))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  fetchTweetsPerWeekday (context) {
    // let url = 'http://broccoli.f4.htw-berlin.de:8080/tweets-per-weekday'
    let url = '/api/tweets-per-weekday.json'
    return axios.get(url)
      .then((response) => context.commit('SET_TWEETS_PER_WEEKDAY', response.data))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  sendEmail (context, payload) {
    console.error('Not implemented yet')
  }
}

export default actions
