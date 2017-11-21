import {api} from './api'

const setAuthHeader = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
const handleSignUser = (data) => {
  const userInfo = data.data
  const {user} = userInfo
  if (userInfo) {
    localStorage.setItem('authentication:authUser', JSON.stringify(userInfo))
    setAuthHeader(userInfo.token)
  }
  return {data: user}
}

const autoSignIn = () => {
  const data = JSON.parse(localStorage.getItem('authentication:authUser'))
  if (data) {
    const {token, user} = data
    if (token) {
      setAuthHeader(token)
    }
    return Promise.resolve(user)
  }
  return Promise.resolve()
}

const signOut = () => {
  setAuthHeader(null)
  localStorage.removeItem('authentication:authUser')
  return Promise.resolve()
}

export default {
  signIn: data => api.post('auth/signin', data).then(handleSignUser),
  signUp: data => api.post('auth/signup', data).then(handleSignUser),
  getSignInUrl: (social) => api.get(`auth/url/${social}`),
  signInWithGoogle: (code) => api.post('auth/signin/google', {code}).then(handleSignUser),
  autoSignIn: autoSignIn,
  signOut: signOut
}
