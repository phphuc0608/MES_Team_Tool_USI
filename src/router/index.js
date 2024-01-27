import { createRouter, createWebHistory } from 'vue-router'
import WipQuery from '../views/WipQuery.vue'
import UnionAll from '../views/UnionAll.vue'

const routes = [
  {
    path: '/',
    name: 'wip-query',
    component: WipQuery
  },
  {
    path: '/union-all',
    name: 'union-all',
    component: UnionAll
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
