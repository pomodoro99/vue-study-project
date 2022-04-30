import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '../views/NewView.vue'  // NewView에 관한 내용 import

Vue.use(VueRouter)

/**
 * routes라는 배열안의 객체로 경로를 지정한다.
 * path : URI의 path
 * component : URI가 path일때 보여줄 화면
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // new에 관한 router 설정을 추가하였다.
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(function (to, from, next) {
    next();
});

router.afterEach(function (to, from) {
    
});

export default router
