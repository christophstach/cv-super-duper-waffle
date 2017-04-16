import axios from 'axios'
// import mailgun from 'mailgun.js'

const actions = {
  fetchRepos (context) {
    return axios.get('https://api.github.com/search/repositories?q=user:christophstach+topic:showcase&sort=updated&order=desc')
      .then((response) => context.commit('SET_REPOS', response.data.items))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  sendEmail (context, payload) {
    // return axios.get('https://api.mailgun.net/v3/christophstach.github.io')
    let domain = 'sandbox3965e50a822c42e6a9afce440dca60e9.mailgun.org'

    /*
    let mg = mailgun.client({
      username: 'api',
      key: 'key-1d68e548f8bc9c08b6627b84918b4169'
    })

    mg.messages.create(domain, {
      from: 'Christoph Stach <mail@christophstach.github.io>',
      to: ['christoph.stach@gmail.com'],
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    */

    return axios({
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Basic ' + btoa('api:key-1d68e548f8bc9c08b6627b84918b4169')
      },
      url: 'https://api.mailgun.net/v3/' + domain + '/messages',
      /*
      auth: {
        username: 'api',
        password: 'key-1d68e548f8bc9c08b6627b84918b4169'
      },
      */
      data: {
        to: 'chrisotph.stach@gmail.com',
        from: payload.email,
        text: payload.messsage
      }
    })
  }
}

export default actions
