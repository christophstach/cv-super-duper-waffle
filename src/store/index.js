import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import workExperience from './init/workExperience'
import educationalBackground from './init/educationalBackground'
import certificates from './init/certificates'
import additionalSkills from './init/additionalSkills'

Vue.use(Vuex)

const state = {
  workExperience,
  educationalBackground,
  certificates,
  additionalSkills,
  repos: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
