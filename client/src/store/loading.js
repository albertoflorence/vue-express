export default {
  state: {
    isLoading: []
  },
  mutations: {
    startLoading (state, payload) {
      state.isLoading.push(payload)
    },
    stopLoading (state, payload) {
      state.isLoading = state.isLoading.filter(l => l !== payload)
    }
  },
  actions: {
    startLoading: ({commit}, payload) => commit('startLoading', payload),
    stopLoading: ({commit}, payload) => commit('stopLoading', payload)
  },
  getters: {
    isLoading: (state) => (from) => state.isLoading.includes(from)
  }
}
