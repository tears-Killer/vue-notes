import Vue from 'vue'
import Router from 'vue-router'
// 懒加载 按需加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '文档'
    },
    beforeEnter:(to,from,next) => {
      console.log('文档路由守卫');
      
    }
  },
]
 const router = new Router({
  routes,
  mode: 'history',
  //修改router-link 默认类名 
  linkActiveClass: 'active'
})


// 前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router