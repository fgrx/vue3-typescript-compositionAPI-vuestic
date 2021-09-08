import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
,
  {
    path: '/ressources',
    name: 'Ressources',
    component: () => import(/* webpackChunkName: "ressources" */ '@/views/RessourcesList.vue'),
  }
,
{
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
  }
,
  {
    path: '/admin',
    name: 'Admin',
    meta:{needAuth:true},
    component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Admin.vue'),
    children:[
      {
      path:"management",
      name:"AdminManagement",
      component: () => import(/* webpackChunkName: "Admin Mangement" */ '@/views/Admin/Management.vue'),
    },
      {
      path:"validation",
      name:"AdminValidation",
      component: () => import(/* webpackChunkName: "Admin Validation" */ '@/views/Admin/Validation.vue'),
    }]
  }
  ,
  {
    path: '/ressource/:id',
    name: 'Ressource',
    component: () => import(/* webpackChunkName: "Ressource" */ '@/views/Ressource.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to,from,next)=>{

  const state:any = store.state
  const user=state.authModule.user

  const isPageProtected = to.matched.some(route=>route.meta.needAuth)

  console.log({user,isPageProtected});
  

  if( !user && isPageProtected){
    next({name:"Login"})
  }else{
    next()
  }
})


export default router
