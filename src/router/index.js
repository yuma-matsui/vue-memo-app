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
    path: '/memos/:index',
    name: 'MemoDetails',
    component:
      () =>
        import(/* webpackChunkName: 'MemoDetails' */ '@/views/MemoDetails'),
    props: true,
    beforeEnter: (to, _, next) => {
      const index = Number(to.params.index)
      if (Number.isNaN(index)) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
