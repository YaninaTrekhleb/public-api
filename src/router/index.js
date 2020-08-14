import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Food from '../views/Food.vue'
import Animals from '../views/Animals.vue'
import Books from '../views/Books.vue'
import RandomRecipe from '../views/RandomRecipe.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:categoryId',
    name: 'Category',
    component: Category
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
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
