import PeliculasPage from '@/views/PeliculasPage.vue'
import PersonajesPage from '@/views/PersonajesPage.vue'
import PlanetasPage from '@/views/PlanetasPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/People',
      name: 'PersonajesPage',
      component: PersonajesPage
    },
    {
      path: '/Planets',
      name: 'PlanetasPage',
      component: PlanetasPage
    },
    {
      path: '/Peliculas',
      name: 'PeliculasPage',
      component: PeliculasPage
    }
  ]
})

export default router
