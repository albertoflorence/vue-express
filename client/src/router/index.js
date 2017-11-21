import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/Auth/index'
import isAuth from './auth'
import AuthCallBack from '@/components/Auth/AuthCallback'
import NotFound from '@/components/NotFound'
import Settings from '@/components/User/Settings/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'auth',
      component: Auth,
      beforeEnter: isAuth
    },
    {
      path: '/user/settings',
      name: 'user-settings',
      component: Settings,
      beforeEnter: isAuth
    },
    {
      path: '/auth/authcallback',
      name: 'authcallback',
      props: (route) => ({code: route.query.code}),
      component: AuthCallBack
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ],
  mode: 'history'
})
