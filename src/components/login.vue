<template>
  <div class="container main mt-5">
      <form action="" @submit.prevent="submitBtn" class="form">
        <h2>欢迎登录</h2>
        <div class="form-group">
            <label for="user">账号：</label>
            <input type="text" id="user" v-model="subData.name" class="form-control">
        </div>
        <div class="form-group">
            <label for="password">密码：</label>
            <input type="text" id="password" v-model="subData.password" class="form-control">
        </div>
        <button type='submit' class="btn btn-primary btn-block">登录</button>
      </form>
  </div>
</template>
<script>
import {loginMethod} from '@/api'
export default {
    data(){
        return{
            subData:{}
        }
    },
    created(){
         this.$store.commit('getLoginName',"");
    },
    methods:{
       async submitBtn(){
           let {data}=await loginMethod(this.subData);
           console.log(data);
           if(data=="false"){
               alert("账号和密码有误")
           }else{
               this.$store.commit('getLoginName',this.subData.name);
               this.$router.push('/home')
           }
        }
    }

}
</script>
<style scoped>
    .main{
        max-width: 300px;
    }
</style>


