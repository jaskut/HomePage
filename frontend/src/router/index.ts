// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import { useAuthStore } from '@/store/auth'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/HomeLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'sensors',
        name: 'sensors',
        redirect: { name: 'allSensors' },
        children: [
          {
            path: 'all',
            name: 'allSensors',
            component: () => import('@/views/main/AllSensors.vue')
          },
          {
            path: ':id',
            name: 'sensor',
            component: () => import('@/views/main/SensorDetail.vue'),
            props: true
          }
        ]
      },
      {
        path: 'actuators',
        name: 'allActuators',
        component: () => import('@/views/main/AllActuators.vue')
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to,from) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
