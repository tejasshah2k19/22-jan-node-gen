var fs = require("fs")  // internal 
var express = require("express")
var ejs = require("ejs")

var app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.write("welcome....")
    res.end()
})

app.get("/calc",function(req,res){
    // data = read views/calc.html 
    // res.write(data)
    //res.end() 
   
   fs.readFile("./views/calc.html",function(err,data){
       console.log("reading done");
       console.log(data);
       
       res.write(data);
       res.end(); 
   })
 
})

app.post("/addition",function(req,res){
    let ans = parseInt(req.body.n1) + parseInt(req.body.n2)
    res.render("calcresult",{
        "ans":ans
    })
   
})

app.listen(3000,function(){
    console.log("works well on 3000");
})