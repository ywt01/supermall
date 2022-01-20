import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const Home = () =>
  import ('../components/content/views/Home/Home.vue')
const Categories = () =>
  import ('../components/content/views/Categories/Categories.vue')
const Shopcart = () =>
  import ('../components/content/views/Shopcart/Shopcart.vue')
const Profile = () =>
  import ('../components/content/views/Profile/Profile.vue')
const Detail = () =>
  import ('../components/content/views/Detail/Detail.vue')
const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home,
}, {
  path: '/categories',
  component: Categories
}, {
  path: '/shopcart',
  component: Shopcart
}, {
  path: '/profile',
  component: Profile
}, 
{
  path:'/Detail/:iid',
  component: Detail
}]

const router = createRouter({
  history: createWebHistory(),
  routes,
  meta:{keepAlive:true},
})
export default router