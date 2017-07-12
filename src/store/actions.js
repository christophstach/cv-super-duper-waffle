import axios from 'axios'

const actions = {
  fetchRepos (context) {
    return axios.get('https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc')
      .then((response) => context.commit('SET_REPOS', response.data.items))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  fetchMostUsedHashTags (context, { fromDate, toDate }) {
    // let url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/twitter/most-used-hash-tags-all' : 'http://broccoli.f4.htw-berlin.de:8080/twitter/most-used-hash-tags-all'
    let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/most-used-hash-tags-all'

    return axios.get(url, { params: { fromDate, toDate } })
      .then((response) => context.commit('SET_MOST_USED_HASH_TAGS', response.data.length > 0 ? response.data : null))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  fetchTweetsPerHour (context, { fromDate, toDate }) {
    // let url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/twitter/tweets-per-hour' : 'http://broccoli.f4.htw-berlin.de:8080/twitter/tweets-per-hour'
    let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/tweets-per-hour'

    return axios.get(url, { params: { fromDate, toDate } })
      .then((response) => context.commit('SET_TWEETS_PER_HOUR', response.data))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  fetchTweetsPerWeekday (context, { fromDate, toDate }) {
    // let url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/twitter/tweets-per-weekday' : 'http://broccoli.f4.htw-berlin.de:8080/twitter/tweets-per-weekday'
    let url = 'http://broccoli.f4.htw-berlin.de:8080/twitter/tweets-per-weekday'

    return axios.get(url, { params: { fromDate, toDate } })
      .then((response) => context.commit('SET_TWEETS_PER_WEEKDAY', response.data))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  sendEmail (context, payload) {
    console.error('Not implemented yet')
  }
}

export default actions
