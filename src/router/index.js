import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue';
import ContactEditPage from '../views/ContactEditPage.vue';
import StatisticPage from '../views/StatisticPage.vue';
import SignupPage from '../views/SignupPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactApp
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/statistics',
      name: 'StatisticPage',
      component: StatisticPage
    },
    {
      path: '/contacts/:id',
      name: 'ContactDetails',
      component: ContactDetails
    },
    {
      path: '/contacts/Edit/:id?',
      name: 'ContactEditPage',
      component: ContactEditPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
