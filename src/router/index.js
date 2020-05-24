import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      { path: '/', component: Home },
      { path: '/dashboard/drilldown', name: 'drilldown', component: () => import(/* webpackChunkName: "drilldown" */ '../views/DataViews/DrillDown.vue') },
      { path: '/dashboard/table', name: 'table', component: () => import(/* webpackChunkName: "table" */ '../views/DataViews/Table.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
