// var express = require("express")
// var router = express.Router()

var router = require("express").Router()
var userController = require("./controller/user-controller")


router.get("/signup",userController.signup)


module.exports  = router 