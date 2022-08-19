import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import MemoDetails from '@/views/MemoDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/memos/:id',
    name: 'MemoDetails',
    component: MemoDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
