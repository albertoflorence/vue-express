export default {
  state: {
    messages: null,
    formMessage: null,
    lastFormMessage: null,
    lastFormMessageType: null
  },
  mutations: {
    setFormMessage (state, payload) {
      state.formMessage = payload.msg
      state.lastFormMessage = payload.from
      state.lastFormMessageType = payload.type
    },
    clearMessages (state) {
      state.formMessage = null
      state.messages = null
      state.lastFormMessage = null
      state.lastFormMessageType = null
    }
  },
  actions: {
    clearMessages: ({commit}) => commit('clearMessages'),
    formSuccess: ({commit}, payload) => commit('setFormMessage', {...payload, type: 'success'}),
    formError: ({commit}, payload) => commit('setFormMessage', {...payload, type: 'error'})
  },
  getters: {
    formMessage: ({formMessage}) => formMessage,
    lastFormMessage: ({lastFormMessage}) => lastFormMessage,
    lastFormMessageType: ({lastFormMessageType}) => lastFormMessageType
  }
}
