var express = require("express")

var app = express()

app.use(express.urlencoded({extended:true}))//url-encoded 
app.use(express.json())   //json


app.get("/",function(req,res){
    console.log("/");
    //
    res.write("/")
    res.end();
})


app.get("/calc",function(req,res){
    console.log("get calc");
    console.log("******************************");
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    console.log("******************************");

    res.json({"msg":"success using get"})
     
})
app.post("/calc",function(req,res){
    console.log("post calc ");
    
    // console.log("******************************");
    // console.log(req.params);
    // console.log(req.body);
    // console.log(req.query);
    // console.log("******************************");

    let ans = parseInt(req.body.n1) + parseInt(req.body.n2) 


    res.json({msg:"success",data:ans})

})

app.listen(3000,function(){
    console.log("server started on 3000.....");
})

