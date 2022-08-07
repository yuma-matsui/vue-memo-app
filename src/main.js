import { createApp } from 'vue'
import MemoApp from '@/MemoApp'
import router from '@/router'
import store from '@/store'

createApp(MemoApp).use(store).use(router).mount('#app')
