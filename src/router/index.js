import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main.vue'
import sendForm from '@/views/send-form.vue'
import succForm from '@/views/succ-form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/send-form',
      name: 'sendForm',
      component: sendForm
    },
    {
      path: '/succ-form',
      name: 'succForm',
      component: succForm
    }
  ]
})

export default router
