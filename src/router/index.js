import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import LayoutOne from '@/layout/layoutone'
import LayoutTwo from '@/layout/layouttwo'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    component: LayoutOne,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/Home.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/',
    component: LayoutTwo,
    children: [
      {
        path: 'project',
        component: () => import('../views/Project.vue'),
        name: 'Project',
        meta: { title: 'Project', icon: 'project' }
      }
    ]
  }
]

export const asyncRoutes = []

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export default router
