<template>
  <div class="container">
    <div class="row">
    <div class="col-8">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(value,outIndex) in leftData" :key="outIndex">
          <tr>
            <td colspan="3">{{value.name}}</td>
          </tr>
          <tr v-for="(item,index) in value.options" :key="index">
            <td>{{item.size}}</td>
            <td>{{item.price}}</td>
            <td><button @click="add(outIndex,index)" class="btn btn-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table col-4">
        <p v-if="!shopCar">购物车暂时没有商品！！！</p>
        <table v-else>
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
            <tr v-for="(item,index) in rightData" :key="index">
              <td><button @click="minus(index)" class="btn btn-default">-</button>{{item.num}}<button @click="plus(index)" class="btn btn-default">+</button></td>
              <td>{{item.type}}</td>
              <td>{{item.money}}</td>
          </tr>
          <tr>
            <td class="text-danger"><strong>总价：{{totalMoney}}</strong></td>
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
      shopCar:false,//购物车中是否有值
      leftData:[
       /* 数据格式
        {
          "name":"pizza",
          'description':"非常好吃",
          'options':[{
               'size': 9,
              'price': 38
          },
          {
               'size': 12,
              'price': 58
          }]
        },
        {
          "name":"niupai",
          'description':"非常好吃",
          'options':[{
               'size': 9,
              'price': 138
          },
          {
               'size': 12,
              'price': 158
          }]
        },
        {
          "name":"cake",
          'description':"非常好吃",
          'options':[{
               'size': 9,
              'price': 68
          },
          {
               'size': 12,
              'price': 88
          }]
        } */
      ],   // 左边的数据
      rightData:[], //右边的数据
      totalMoney:0 //总价
    }
  },
  created(){
    console.log(this.$store.state);
      this.rightData=this.$store.state.stateData.shopCarData;
      this.totalMoney=this.$store.state.stateData.shopCarTotalMoney;
  },
  mounted(){
      this.count();
      this.leftData= this.$store.state.stateData.adminData;
  },
  methods:{
    count(){ //判断购物车中是否是有商品
      if(this.rightData.length==0){
         this.shopCar=false;
      }else{
         this.shopCar=true;
        
      }
    },
    totalMoneyMethod(){ // 计算购物车中的总价
      this.totalMoney=0;
      for(let i in this.rightData){
        this.totalMoney+=parseFloat(this.rightData[i].money);
      }
      this.$store.commit('getshopCarTotalMoney',this.totalMoney);
    },
    minus(index){ //点击购物车中的减号
     this.rightData[index].num--;
     //计算总价
     this.rightData[index].money=parseInt(this.rightData[index].num)*parseFloat(this.rightData[index].moneyOne);
     if(this.rightData[index].num=="0"){
       this.rightData.splice(index,1);
     }
      this.$store.commit('getShopcarData',this.rightData);
      this.count();
      this.totalMoneyMethod();
    },
    plus(index){//点击购物车中的加号
      this.rightData[index].num++;
      this.rightData[index].money=parseInt(this.rightData[index].num)*parseFloat(this.rightData[index].moneyOne);
      this.$store.commit('getShopcarData',this.rightData);
      this.totalMoneyMethod();
   },
    add(outIndex,inIndex){ //点击商品的添加按钮
      //当点击的时候判断rightData数据里面是否有这个品种，有的话就直接数量加1，否则就新添加这条数据
      let obj=new Object();
      let name= this.leftData[outIndex].name;
      let size=this.leftData[outIndex].options[inIndex].size;  
      obj.type=name+size;
      obj.money=this.leftData[outIndex].options[inIndex].price;
      obj.moneyOne=this.leftData[outIndex].options[inIndex].price;
      let isHas=false;
      //console.log(obj);
      for(let i in this.rightData){
         if(this.rightData[i].type===name+size) {
          this.rightData[i].num++;
          this.rightData[i].money=parseInt(this.rightData[i].num)*parseFloat(this.rightData[i].moneyOne);
          isHas=true;
          break;
         }
      }
      if(!isHas){
         obj.num=1;
         this.rightData.push(obj);
         
      }
      this.count();
      this.totalMoneyMethod();
      this.$store.commit('getShopcarData',this.rightData);
    }
  }
  
}
</script>
<style scoped>
table{
  width:100%;
}
/* tr{
  border-bottom:1px solid blue;
} */
/* .left{
  width:600px;
  float:left;
}
.right{
  width:300px;
  float:right;
} */
</style>



