import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Breakfast from '../views/Breakfast.vue'
import Lunch from '../views/Lunch.vue'
import Dinner from '../views/Dinner.vue'
import RandomRecipe from '../views/RandomRecipe.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/breakfast',
    name: 'Breakfast',
    component: Breakfast
  },
  {
    path: '/lunch',
    name: 'Lunch',
    component: Lunch
  },
  {
    path: '/dinner',
    name: 'Dinner',
    component: Dinner
  },
  {
    path: '/random',
    name: 'RandomRecipe',
    component: RandomRecipe
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
