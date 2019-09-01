// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
/* 引入bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//全局守卫,必须放在这里
 router.beforeEach((to, from, next)=>{
  if(store.state.stateData.loginName=='' && to.path!="/register" && to.path!="/login"){
    alert("请先登录");
    next('/login')
  }else{
    next();
  }
}) 