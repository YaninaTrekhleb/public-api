import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import ApiCategories from '../views/ApiCategories.vue'
import RandomApi from '../views/RandomApi.vue'
import ApiDetails from '../views/ApiDetails.vue'
import Sitemap from '../components/Sitemap.vue' 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apiCategories',
    name: 'ApiCategories',
    component: ApiCategories
  },
  {
    path: '/category/:categoryId',
    name: 'Category',
    component: Category
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
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: Sitemap
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
