import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import loading from './loading'
import messages from './messages'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user,
    loading,
    messages
  }
})
