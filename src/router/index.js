import PeliculasComponent from '@/components/PeliculasComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/Peliculas',
      name: 'PeliculasPage',
      component: PeliculasComponent
    }
  ]
})

export default router
