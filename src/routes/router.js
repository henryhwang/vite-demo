//@ts-check
import { createRouter, createWebHistory } from 'vue-router'
import { IndexPage } from '../pages/home.jsx'
import { AboutPage } from '../pages/about.jsx'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: IndexPage },
    { path: '/about', name: 'About', component: AboutPage }
  ]
})

export {
  router,
}