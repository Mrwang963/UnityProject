import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


const fileModel = require.context('./route',true,/\.js$/);
let child = [];
fileModel.keys().forEach(item => {
  child=[...child,...fileModel(item).default];
});
child.reverse()
export {child}


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/wel',
    children:child
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const user = localStorage.getItem('user');
  if(!user){
    if(to.path == '/wel'){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})
export default router
