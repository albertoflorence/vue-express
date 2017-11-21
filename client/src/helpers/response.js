import {store} from '@/store'
const handleResponse = (from, method) => (result) => {
  if (!result.data) return null
  store.dispatch('stopLoading', from)
  if (result.data.msg) {
    store.dispatch('formSuccess', {
      from,
      msg: result.data.msg
    })
  }
  if (method) {
    store.dispatch(method, result.data)
  }
}
export { handleResponse }
