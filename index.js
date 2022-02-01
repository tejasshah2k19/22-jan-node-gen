const express = require("express")
const usercontroller = require("./controller/user-controller")
const apiRoutes = require("./api-routes")
const mongoose = require('mongoose');


const app = express()

//app.set(); // view ejs 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// app.get("/signup",usercontroller.signup)
app.use("/", apiRoutes)


//   /api/signup

//customer 
//admin 
//vendor 


mongoose.connect("mongodb://localhost:27017/meandec",function(err){
        if(err){
            console.log(err);
        }else{
            console.log("dbConnected");
        }
})

app.listen(3000, function () {
    console.log("server started on 3000");
})