import {store} from '@/store'
const handle404 = ({from, data}) => {
  store.dispatch('formError', {
    msg: data,
    from
  })
}

const handle400 = ({from, data}) => {
  store.dispatch('formError', {
    msg: data,
    from
  })
}

const handleDefault = ({from, data}) => {
  console.log(data)
  return ''
}

const handleErrors = (from) => (error) => {
  if (!error.response) return handleDefault()
  const params = {
    data: error.response.data,
    from
  }
  switch (error.response.status) {
    case 404:
      handle404(params)
      break
    case 400:
      handle400(params)
      break
    default:
      handleDefault(params)
  }
  store.dispatch('stopLoading', from)
}
export { handleErrors }
