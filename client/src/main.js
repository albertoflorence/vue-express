// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import LoadingCircle from './components/Globals/LoadingCircle'
import FormMessage from './components/Globals/FormMessage'

import services from './services'

Vue.use(Vuetify)
Vue.component(FormMessage.name, FormMessage)
Vue.component(LoadingCircle.name, LoadingCircle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    services.auth.autoSignIn()
      .then(user => store.dispatch('setUser', user))
  }
})
