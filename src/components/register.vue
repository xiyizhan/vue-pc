<template>
  <div class="container main mt-5">
    <form action="" method="POST"  @submit.prevent="subBtn"> 
        <div class="form-group">
            <label for="user" class="control-label">账号：</label>
            <input type="text" id="user" v-model="registerInfo.user" class="form-control">
        </div>
        <div class="form-group">
            <label for="password" class="control-label">密码：</label>
            <input type="password" id="password" v-model="registerInfo.password" class="form-control">
        </div>
        <div class="form-group">
            <label for="passwordtwice" class="control-label">再次密码：</label>
            <input type="password" id="passwordtwice" v-model="registerInfo.passwordtwice" class="form-control">
        </div>
       <!-- <div>
            <label for="file">上传文件：</label>
            <input type="file" id="file"  @change="fileImage" accept="image/png,image/gif,image/jpeg">
            <img :src="imgpic" />
        </div>  -->
        <button type="submit" class='btn btn-primary btn-block'>注册</button>
     </form> 
      <!--当用form表单提交（如input text),必须要命名'name'属性，将把值以对象的形式传给后台  -->
    <!--  <form action="http://localhost:5005/uploadFile" method="POST" enctype="multipart/form-data">
         <input type="text" name="myName">
         <input type="file" value="上传文件" name="image" size="50">
         <button type="submit">tijiao</button>
     </form> -->
        <!-- 用非form上传图片 -->
    <!--  <div>
        <input type="file" name="FileUpload" id="FileUpload" ref="FileUpload" multiple="multiple">
        <a id="btn_uploadimg" @click="uploadExample">上传图片</a>
    </div> -->

  </div>
</template>
<script>
import {register,uploadPic,registerEx} from '@/api'
export default {
    data(){
        return{
            registerInfo:{

            },
            imgpic:"11"
        }
    },
    methods:{
        async subBtn(){
            console.log(this.registerInfo);
            let result=await register(this.registerInfo);
           this.$router.push('/login');
          
        },
       async uploadExample(){
            var fileObj = this.$refs.FileUpload.files[0]; // js 获取文件对象
            console.log(fileObj);
               if (typeof (fileObj) == "undefined" || fileObj.size <= 0) {
                   alert("请选择图片");
                   return;
               }
               var formFile = new FormData();
               formFile.append("action", "UploadVMKImagePath");  
               formFile.append("file", fileObj); //加入文件对象
 
               /* 注意，当直接console.log(formFile)结果会是空值，必须要用get或者getAll
                get()函数只会返回username附加的第一个值;
                getAll()函数将返回username一个数组中的两个值：(如下)
                formData.getAll('username'); // Returns ["Chris", "Bob"]
                */
               //console.log(formFile.get("file"));
               var data = formFile;
               console.log(data)
               let result=await registerEx(data);
               console.log(result);
        },
        fileImage:function(e){
                        var file = e.target.files[0];
                        /*var imgSize=file.size/1024;
                         if(imgSize>200){
                            alert('请上传大小不要超过200KB的图片')
                        }else{   }*/
                            var reader = new FileReader();
                            reader.readAsDataURL(file); // 读出 base64
                            reader.onloadend = ()=>{
                                // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                            var dataURL = reader.result; 
                            this.imgpic=dataURL;
                            // console.log(dataURL);
                                uploadPic(dataURL).then(res=>{
                                    console.log(res);//可以对结果进行判断，当有返回值时就进行下面的
                                    
                            }) 
                        }       
        }
    }
}
</script>

<style scoped>
.main{
    max-width:300px;
}
</style>
