import {api} from './api'

export default {
  changePassword: data => api.put('user/changePassword', data),
  changeEmail: data => api.put('user/changeEmail', data)
}
