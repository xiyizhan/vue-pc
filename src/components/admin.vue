<template>
  <div class="container mt-5">
    <div class="row">
    <div class="col-8">
      <h5>添加新的商品</h5>
      <form action="" class="form-horizontal" >
        <div class="form-group row m-3">
          <label for="name" class="col-2 control-label">品种</label>
          <input type="text" id="name" v-model="leftData.name" class="col-10 form-control">
        </div>
        <div class="row form-grop  m-3">
           <label for="description" class="col-2 control-label">描述</label>
           <textarea id="description" v-model="leftData.description" class="col-10 form-control"></textarea>
        </div>   
        <div >
          <h6>选项1</h6>
          <div class="row form-grop m-3">
             <label for="oneSize" class="col-2 control-label">尺寸</label>
             <input type="text" id="oneSize" class="col-10 form-control" v-model="leftData.oneSize">
          </div>
          <div class="row form-grop m-3">
             <label for="onePrice" class="col-2 control-label">价格</label>
             <input type="text" id="onePrice" class="col-10 form-control" v-model="leftData.onePrice">
          </div>
        </div>
        <div>
           <h6>选项2</h6>
           <div class="row form-grop m-3">
             <label for="twoSize" class="col-2 control-label">尺寸</label>
             <input type="text" id="oneSize" v-model="leftData.twoSize" class="col-10 form-control">
           </div>
           <div class="row form-grop m-3">
             <label for="twoPrice" class="col-2 control-label">价格</label>
             <input type="text" id="twoPrice" v-model="leftData.twoPrice" class="col-10 form-control">
           </div>
        </div>
        <button type="submit" @click="submitBtn" class="btn btn-success btn-block">提交</button>
      </form>
    </div>
    <div class="col-4 rightModule">
      <h5>菜单</h5>
      <table class="table">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        <tr v-for="(item,index) in rightData" :key="index">
          <td>{{item.name}}</td>
          <td><button @click="deleteShop(index)" class="btn btn-danger table-hover">×</button></td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      leftData:{},
      rightData:[]
    }
  },
  mounted(){
     this.rightData=this.$store.state.stateData.adminData;
  },
  methods:{
    submitBtn(){
      let shopObj=new Object();
      shopObj.name=this.leftData.name;
      shopObj.description=this.leftData.description;
      shopObj.options=[
          {
               'size': this.leftData.oneSize,
              'price': this.leftData.onePrice
          },
          {
               'size':this.leftData.twoSize,
              'price':this.leftData.twoPrice
          }];
      this.rightData.push(shopObj);
      //this.$store.state.stateData.adminData=this.rightData; 
      //此方法和下面这种方法在效果上相同，区别是此种方法改变state里的值不会在vue的控制台显示state值的改变，而通过commit在控制台会及时响应state的变化
      this.$store.commit('getAdminData',this.rightData);
      return false;
    },
    deleteShop(index){
      this.rightData.splice(index,1);
      this.$store.commit('getAdminData',this.rightData);
      this.$store.state.stateData.shopCarData=[];
    }
  },
  //局部守卫
  beforeRouteLeave(to,from,next){
    if(confirm("确定离开吗？")==true){
      next()
    }else{
      next(false)
    }
  }
}
</script>
<style scoped>
/* .leftModule{
  border:1px solid yellow;
}
.rightModule{
  border:1px solid red;
} */
</style>


