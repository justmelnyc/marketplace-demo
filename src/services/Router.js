import VueRouter from 'vue-router'
import Routes from './Routes'
import App from '../components/App'

export default function (Vue) {
  Vue.use(VueRouter)
  let router = new VueRouter({
    linkActiveClass: 'is-active'
  })

  Routes(router)

  router.start(App, '#app')
}
