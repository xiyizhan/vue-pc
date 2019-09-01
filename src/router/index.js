import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import menu from '@/components/menu'
import admin from '@/components/admin'
import login from '@/components/login'
import register from '@/components/register'
import navTab from '@/components/navTab'
/* 二级路由 */
import connect from '@/components/aboat/connect'
import express from '@/components/aboat/express'
import order from '@/components/aboat/order'
import orderHistory from '@/components/aboat/orderHistory'
/* 三级路由 */
import name from '@/components/aboat/contact/name'
import phone from '@/components/aboat/contact/phone'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  scrollBehavior(to,from,savedPosition){
      if(savedPosition){
        return savedPosition;
      }else{
        return { x:0, y:0 }
    }
  },
  
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default:home,
        'connect':connect,
        'express':express,
        'order':order,
        'orderHistory':orderHistory
      }
      
    },
    {
      path:'/menu',
      component:menu,
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    // alert("非登录状态,不能访问此页面!");
    // next(false);
    // 判断store.gettes.isLogin === false 
    // if(to.path == '/login' || to.path == '/register'){
    //   next();
    // }else{
    //   alert("还没有登录,请先登录!");
    //   next('/login');
    // }
   //}

    },
    {
      path:'/admin',
      component:admin,
      
    },
    {
      path:'/aboat',
      name:'aboat',
      component:navTab,
      redirect:'/aboat/connect',
      children:[
        {
          path:'connect',
          component:connect,
          redirect:'/aboat/connect/name',
          children:[
            {
              path:'name',
              component:name
            },
            {
              path:'phone',
              component:phone
            }
        ]
        },
        {
          path:'express',
          component:express
        },
        {
          path:'order',
          component:order
        },
        {
          path:'orderHistory',
          component:orderHistory
        }
    ] 
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/login',
      component:login
    }
  ]
  
});

