import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Food from '../views/Food.vue'
import Animals from '../views/Animals.vue'
import Books from '../views/Books.vue'
import RandomApi from '../views/RandomApi.vue'
import ApiDetails from '../views/ApiDetails.vue'

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
    name: 'RandomApi',
    component: RandomApi
  },
  {
    path: '/api/:apiId',
    name: 'ApiDetails',
    component: ApiDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
