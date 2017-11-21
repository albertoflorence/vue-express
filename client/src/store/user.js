import services from '@/services'
import {handleErrors, handleResponse} from '@/helpers'
export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    test: () => {
      services.auth.test()
    },
    setUser: ({commit}, payload) => commit('setUser', payload),
    signIn: ({commit}, {data, from}) =>
      services.auth.signIn(data)
        .then(handleResponse(from, 'setUser'))
        .catch(handleErrors(from)),
    signUp: ({commit}, {data, from}) =>
      services.auth.signUp(data)
        .then(handleResponse(from, 'setUser'))
        .catch(handleErrors(from)),
    signOut: ({commit}) =>
      services.auth.signOut()
        .then(commit('setUser', null)),
    signInWithSocialRedirect: ({commit}, payload) =>
      services.auth.getSignInUrl(payload)
      .then(url => {
        if (!url) return
        window.location.href = url.data
      }),
    signInWithGoogle: ({commit}, payload) =>
      services.auth.signInWithGoogle(payload)
        .then(user => commit('setUser', user.data)),
    changePassword: ({commit}, {data, from}) =>
      services.user.changePassword(data)
        .then(handleResponse(from))
        .catch(handleErrors(from)),
    changeEmail: ({commit}, {data, from}) =>
      services.user.changeEmail(data)
      .then(handleResponse(from))
      .then(() => this.a.actions.signIn({commit}, {data: {email: data.newEmail, password: data.password}, from}))
      .catch(handleErrors(from))
  },
  getters: {
    isAuthenticated: ({user}) => !!user,
    user: ({user}) => user
  }
}
