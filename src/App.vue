<template>
  <div id="app">
   <app-header></app-header>
    <router-view/>
    <div class="container">
      <!-- router-view复用 -->
      <div class="row">
        <div class="col-3">
            <router-view name="connect"></router-view>
        </div>
        <div class="col-3">
            <router-view name="express"></router-view>
        </div>
        <div class="col-3">
            <router-view name="order"></router-view>
        </div>
        <div class="col-3">
            <router-view name="orderHistory"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'App',
  components:{
   "app-header":header
  },
   created () {
   /*  //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })*/
  } 
}
</script>

<style>

</style>
