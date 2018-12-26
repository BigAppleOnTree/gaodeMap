import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const defaultMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/npm',
    name: 'Map',
    component: () => import('@/components/NpmEveryDay')
  }
]
export default new Router({
  routes: defaultMap
})
