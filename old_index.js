var http = require("http")
var fs = require("fs")

//express 
//url 
//get post 
//mvc 
//css js image 
http.createServer(function (req, res) {
    console.log(req.url); 
    if (req.url == "/") {
        res.write("welcome....")
        res.end()
    } else if (req.url  == "/login" && req.method.toLowerCase() == "post") {
        res.write("login...")
        res.end()
    } else if (req.url  == "/signup") {
        res.write("signup...")
        res.end()
    }
    else if(req.url == "/calc"){
        fs.readFile("calc.html",function(err,fileData){
            res.write(fileData)
            res.end()
        })
    }
    else if(req.url == "/addition"){
        
    }
    else{
        res.write("404");
        res.end()
    }

    // console.log(req.url);
    // console.log("request accepted....")
    // res.write("welcome....")
    // res.end()


}).listen(3000)


//signup
//login
//logout
//mycart 
