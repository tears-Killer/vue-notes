import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/Login')
const Home = () => import('../views/Home')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

  const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
      meta:{
        title: '登录'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
