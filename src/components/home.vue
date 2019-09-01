<template>
  <div>
    <button @click="go()">Go</button>
    <div class="styleObj">这就是样式</div>
  </div>
  
</template>

<script>
export default {
 
  data () {
    return {
     
    }
  },
  methods:{
    go(){
      this.$router.push("/menu")
    }
  }
}
</script>


<style scoped lang='less'>
@base:#e60f0f;
@lighter: lighten(spin(@base,5),10%);
.styleObj{
  width:200px;
  height:200px;
background:@lighter;
}
</style>
