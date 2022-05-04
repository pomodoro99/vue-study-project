import Vue from 'vue'
import VueRouter from 'vue-router'
import AsyncExView from '../views/AsyncExView.vue'
import SyncExView from '../views/SyncExView.vue'
import HomeView from '../views/HomeView.vue';
import PromiseView from '../views/PromiseView.vue';
import AsyncAwaitView from '../views/AsyncAwaitView.vue';
import AxiosView from '../views/AxiosView.vue';
import SignUpView from '../views/SignUpView.vue';
import LoginView from '../views/LoginView.vue';
import DeleteUserView from '../views/DeleteUserView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sync',
    name: 'syncEx',
    component: SyncExView
  },
  {
    path: '/async',
    name: 'asyncEx',
    component : AsyncExView
  },
  {
    path: '/async-await',
    name: 'async-await',
    component : AsyncAwaitView
  },
  {
    path: '/promise',
    name: 'promise',
    component : PromiseView
  },
  {
    path: '/axios',
    name: 'axios',
    component : AxiosView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component : SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component : LoginView
  },
  {
    path: '/delete-user',
    name: 'delete-user',
    component : DeleteUserView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
