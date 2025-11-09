import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import SearchResultPage from '../views/SearchResultPage.vue'
import SearchByIngridientsPage from '../views/SearchByIngridientsPage.vue'

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/searchResults', name: 'SearchResultPage', component: SearchResultPage },
  { path: '/ingridients', name: 'IngridientsPage', component: SearchByIngridientsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
