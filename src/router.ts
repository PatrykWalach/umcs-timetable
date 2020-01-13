import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =()=> import( '@/views/Home.vue')

Vue.use(VueRouter)
export const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      component: Home,
      name: 'home',
      path: '/',
    },
  ],
})

export default router
