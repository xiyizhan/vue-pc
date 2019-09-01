<template>
 <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </a>
      <a href="/" class="navbar-brand">Pizza点餐系统</a>
      <ul class="navbar-nav">
        <router-link class="nav-link" to="/home" tag="li">主页</router-link >
        <router-link class="nav-link" to="/menu" tag="li">菜单</router-link >
        <router-link class="nav-link" to="/admin" tag="li">管理</router-link>
        <router-link class="nav-link" to="/aboat" tag="li">关于我们</router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <template v-if="$store.state.stateData.loginName==''">
           <router-link class="nav-link" to="/login" tag="li">登录</router-link>
           <router-link class="nav-link" to="/register" tag="li">注册</router-link>
        </template>
        <template v-else>
           <router-link class="nav-link" to="" tag="li">{{loginName}}</router-link>
           <router-link class="nav-link" to="/login" tag="li">退出</router-link>
        </template>
       
      </ul>
    </nav> 
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
     
    }
  },
  computed:{
   ...mapGetters(['loginName']) 
  },
  methods:{
  }

}
</script>


<style scoped>

</style>
