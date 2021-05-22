import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Inventory from './../views/Inventory.vue'
import EditInventory from './../views/EditInventory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/editinventory',
    name: 'EditInventory',
    component: EditInventory
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
