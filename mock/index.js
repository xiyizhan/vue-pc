let express=require('express');
let app=express();//将express实例化
let fs=require('fs');
let bodyParser=require('body-parser');
let multer  = require('multer');
app.use(express.static('public'));
const infos=[
    {
        "name":'123',
        "password":"abc"
    },
    {
        "name":'000',
        "password":"000"
    }
];
app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })//post请求会用到
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.sendStatus(200);
    else next();
})
/* 上传文件,下面这种方法会将图片放到mock文件夹下或者自定义路径下 */
 /* app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));//可能是设置临时存放路径
app.post('/uploadFile', function (req, res) {
 //console.log( __dirname);//D:\小敏资料\vue\vueProject\vuepc\mock
    let infoData=req.body;
    console.log(infoData);
    console.log(req.files[0]);  // 上传的文件信息
   //var des_file = __dirname + "/" + req.files[0].originalname;//此方法是将上文件放到mock文件夹下
    var des_file ="D:/小敏资料/modifyUpload/" + req.files[0].originalname;
    //此方法是自定义存放文件的路径，会将文件放到路径"D:/小敏资料/modifyUpload/"下
    console.log(req.files[0].path);
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname,
                    myName:infoData.myName
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })   */

 /* 通过new formData()上传文件，接受文件的位置会默认在"C:\Users\Actor\AppData\Local\Temp\PSYzdnioBGQ6tiyxN2uLbWkz.png" */
 /* var multipart = require('connect-multiparty');
 var multipartMiddleware = multipart();
// 这里dest对应的值是你要将上传的文件存的文件夹
 app.post('/registerExample',multipartMiddleware,function(req,res){
     console.log(req.files);
	res.json({result: 'success', data: req.body,file:req.files.file.path});
}); */

/* 通过formData传文件，自定义存放路径，主要是通过multer设置 */
var upload = multer({dest:'D:/小敏资料/modifyUpload'});
app.post("/registerExample", upload.single('file'),(req, res) => {
    // ---------- 因为保存的文件为二进制，取消下面代码块注释可让保存的图片文件在本地文件夹中预览 ------
    console.log(req.file)
    var file_type;
    if (req.file.mimetype.split('/')[0] == 'image') file_type = '.' + req.file.mimetype.split('/')[1];
    if (file_type) {
        fs.rename(req.file.path,req.file.path+file_type,function(err,doc){
        //下面这个是将上传文件名修改为上传时的文件名
        //fs.rename(req.file.path, req.file.destination+'/'+req.file.originalname , function (err, doc) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('55');
            res.send('D:/小敏资料/modifyUpload/' + req.file.originalname + file_type)
        })
        return;
    }
    res.send('D:/小敏资料/modifyUpload/' + req.file.filename)
})


 app.post('/register',urlencodedParser,(req,res)=>{
    let infoData=req.body;
    console.log(infoData)
    infos.push(infoData);
    console.log(infos);
    res.json(infos);
    
}) 
app.post('/upload',urlencodedParser,(req,res)=>{
    let pic=req.body;
    console.log(pic);
    res.end();
    
})
app.post('/login',urlencodedParser,(req,res)=>{
    let resData=req.body;
    let isSuccess=false;
    console.log(resData);
    console.log(infos);
    for(let i in infos){
        if(resData.user==infos[i].name && resData.password==infos[i].password){
            isSuccess=true;
            break;
        }
    }
    if(isSuccess){
        res.send("true");
    }else{
        res.send("false");
    }
    
})


//监听端口
app.listen(5005)
