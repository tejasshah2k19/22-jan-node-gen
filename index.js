const express = require("express")
const usercontroller = require("./controller/user-controller")
const apiRoutes = require("./api-routes")

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




app.listen(3000, function () {
    console.log("server started on 3000");
})