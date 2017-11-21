import axios from 'axios'
const api = axios.create({
  baseURL: `http://localhost:8000/`
})

api.interceptors.response.use(response => {
  return Promise.resolve(response)
}, errors => {
  if (errors.response.status === 401) {
    window.location.pathname = '/login'
    return
  }
  return Promise.reject(errors)
})

export {api}
