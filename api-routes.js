// var express = require("express")
// var router = express.Router()

var router = require("express").Router()

var userController = require("./controller/user-controller")
var dbUserController = require("./controller/db-users-controller")

// router.post("/signup",userController.signup)
// router.get("/users",userController.listUsers)
// router.post("/login",userController.login)
// router.delete("/user/:userId",userController.deleteUser)
// router.delete("/user2/:userId",userController.deleteUser2)
// router.put("/user",userController.updateUser)

router.post("/users",dbUserController.signupdb)
router.get("/users",dbUserController.getAllUsers)


module.exports  = router 