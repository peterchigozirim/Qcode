import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/donation',
      name: 'donation',
      component: () => import('../views/Donation.vue')
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: () => import('../views/ContactUs.vue')
    },

    // authenication routes
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
