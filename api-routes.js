// var express = require("express")
// var router = express.Router()

var router = require("express").Router()
var userController = require("./controller/user-controller")


router.post("/signup",userController.signup)
router.get("/users",userController.listUsers)
router.post("/login",userController.login)
router.delete("/user/:userId",userController.deleteUser)
router.delete("/user2/:userId",userController.deleteUser2)
router.put("/user",userController.updateUser)

module.exports  = router 