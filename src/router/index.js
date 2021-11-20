import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const Home = () =>
  import ('../components/content/views/Home/Home.vue')
const Categories = () =>
  import ('../components/content/views/Categories/Categories.vue')
const Shopcart = () =>
  import ('../components/content/views/Shopcart/Shopcart.vue')
const Profile = () =>
  import ('../components/content/views/Profile/Profile.vue')
const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/categories',
  component: Categories
}, {
  path: '/shopcart',
  component: Shopcart
}, {
  path: '/profile',
  component: Profile
}, ]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  meta:{keepAlive:true},
})

export default router