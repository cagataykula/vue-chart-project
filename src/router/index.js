import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      { path: '/dashboard', name: 'dashboard-index', component: () => import(/* webpackChunkName: "drilldown" */ '../views/DataViews/index.vue') },
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
