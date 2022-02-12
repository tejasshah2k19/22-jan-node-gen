const express = require("express")
const usercontroller = require("./controller/user-controller")
const apiRoutes = require("./api-routes")
const mongoose = require('mongoose');
const multer = require("multer")
const path = require("path")

const app = express()

//app.set(); // view ejs 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


var storageConfig = multer.diskStorage({
    destination:function(req,file,next){
        //signup -> email 
        console.log("uploads folder set ");
        next(null,"uploads")//destination 
    },filename:function(req,file,next){
        let fileName = file.originalname
        //validation extension
        console.log("file got ==> ",fileName);
        let ext = path.extname(file.originalname) 
        console.log("file got --> ",ext);
        
        next(null,fileName)
    }
})


var upload = multer({
    storage:storageConfig,
    limits:{fileSize:1024*1000*20},
    fileFilter:function(req,file,next){
        let mime = file.mimetype
        //validation extension - mimetype
        //next("ERROR : INVALID FILE FORMAT ")
        console.log("return with no error ");
        return next(null,file.originalname)
    }
}).single("profilepic")


app.post("/uploadprofile",function(req,res,next){
    console.log("calling upload.....");
    console.log(req.body);
    upload(req,res,function(err,data){
        console.log("calling ... ",err);
        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            res.json({status:200,msg:"done",data:data})
        }
    })
})

// app.get("/signup",usercontroller.signup)
app.use("/", apiRoutes)




//   /api/signup

//customer 
//admin 
//vendor 




// mongoose.connect("mongodb://localhost:27017/meandec",function(err){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("dbConnected");
//         }
// })

app.listen(3000, function () {
    console.log("server started on 3000");
})