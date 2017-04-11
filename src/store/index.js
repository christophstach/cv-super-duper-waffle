import Vue from 'vue'
import Vuex from 'vuex'

import workExperience from './init/workExperience'
import educationalBackground from './init/educationalBackground'
import certificates from './init/certificates'
import additionalSkills from './init/additionalSkills'

Vue.use(Vuex)

const state = {
  workExperience,
  educationalBackground,
  certificates,
  additionalSkills
}

const getters = {

}

const actions = {

}

const mutations = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
