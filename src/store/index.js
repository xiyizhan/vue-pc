import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import states from './states.js'
import getters from './getters.js'
import mutations from './mutation.js'
import actions from './action.js'
export default new Vuex.Store({
	state:states,
	getters,
	mutations,
	actions
}) 