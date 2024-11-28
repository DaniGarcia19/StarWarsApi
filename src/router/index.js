import PeliculasPage from '@/views/PeliculasPage.vue'
import PersonajesPage from '@/views/PersonajesPage.vue'
import PlanetasPage from '@/views/PlanetasPage.vue'
import EspeciesPage from '@/views/EspeciesPage.vue'
import Vehículospage from '@/views/Vehículospage.vue'
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
    },
    {
      path: '/Especies',
      name: 'EspeciesPage',
      component: EspeciesPage
    },
    {
      path: '/Vehículos',
      name: 'VehículosPage',
      component: Vehículospage
    }
  ]
})

export default router
