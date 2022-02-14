const express = require("express")
const usercontroller = require("./controller/user-controller")
const apiRoutes = require("./api-routes")
const mongoose = require('mongoose');
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const app = express()

//app.set(); // view ejs 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let diskStorageObj = multer.diskStorage({
    destination: function (req, file, next) {
        console.log(req.body.email);
        fs.mkdir("uploads/" + req.body.email, function (err) {
            next(null, "uploads/" + req.body.email)
        })
        // 
    },
    filename: function (req, file, next) {
        console.log("EMAIL =>", req.body);
        next(null, file.originalname)
    }

})


const upload = multer({ storage: diskStorageObj, limits: { fileSize: 120000 * 1024 } }).single("profilePic")
// const upload1 = multer({dest:"uploads"})

// var ds = multer.diskStorage({
//     filename:function(req,file,next){
//             let myfile = file.originalname 
//             next(null,myfile)
//     },
//     destination:function(req,file,callback){
//         next(null,"uploads")
//     }
// })
// const upload2 = multer({ storage:ds ,dest:"uploads",limits:{fileSize:1024*1024*10}})



app.post("/saveprofile", function (req, res) {
    
    upload(req, res, function (err) {
        //
        console.log("Email -> re ", req.body.email);
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ msg: req.body })
        }
    })
})

// var storageConfig = multer.diskStorage({
//     destination:function(req,file,next){
//         //signup -> email 
//         console.log("uploads folder set ");
//         next(null,"uploads")//destination 
//     },filename:function(req,file,next){
//         let fileName = file.originalname
//         //validation extension
//         console.log("file got ==> ",fileName);
//         let ext = path.extname(file.originalname) 
//         console.log("file got --> ",ext);
// asdfdsfsdfsdfds+ext
//         next(null,fileName)
//     }
// })


// var upload = multer({
//     storage:storageConfig,
//     limits:{fileSize:1024*1000*20},
//     fileFilter:function(req,file,next){
//         let mime = file.mimetype
//         //validation extension - mimetype
//         //next("ERROR : INVALID FILE FORMAT ")
//         console.log("return with no error ");
//         return next(null,file.originalname)
//     }
// }).single("profilepic")


// app.post("/uploadprofile",function(req,res,next){
//     console.log("calling upload.....");
//     console.log(req.body);
//     upload(req,res,function(err,data){
//         console.log("calling ... ",err);
//         if(err){
//             res.json({status:-1,msg:"SMW",data:err})
//         }else{
//             res.json({status:200,msg:"done",data:data})
//         }
//     })
// })

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