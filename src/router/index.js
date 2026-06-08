import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // RUTA HOME
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // RUTA ABOUT
    {
      path: '/about', // path de la ruta
      name: 'about', // nombre de la ruta
      component: () => import('../views/AboutView.vue'), // componente que se renderiza al acceder a la ruta (carga perezosa)
    },
  ],
})

export default router
