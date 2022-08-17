import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:
      () =>
        import(/* webpackChunkName: 'Home' */ '@/views/HomeView')
  },
  {
    path: '/memos/:id',
    name: 'MemoDetails',
    component:
      () =>
        import(/* webpackChunkName: 'MemoDetails' */ '@/views/MemoDetails')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
