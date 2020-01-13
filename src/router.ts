import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)
export const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/monday'
    },
    {
      beforeEnter(to, from, next) {
        if (weekdays.includes(to.params.weekday)) {
          next()
        } else {
          next({
            ...to,
            params: {
              weekday: 'monday',
            },
          })
        }
      },
      component: Home,
      name: 'home',
      path: '/:weekday',
      props({ params }: Route) {
        return { weekday: params.weekday.toUpperCase() }
      },
    },
  ],
})

export default router
