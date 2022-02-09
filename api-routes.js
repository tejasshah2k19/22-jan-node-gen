// var express = require("express")
// var router = express.Router()

var router = require("express").Router()

var userController = require("./controller/user-controller")
var dbUserController = require("./controller/db-users-controller")
var roleController = require("./controller/role-controller") 
var employeeController = require("./controller/employee-controller")

// router.post("/signup",userController.signup)
// router.get("/users",userController.listUsers)
// router.post("/login",userController.login)
// router.delete("/user/:userId",userController.deleteUser)
// router.delete("/user2/:userId",userController.deleteUser2)
// router.put("/user",userController.updateUser)

router.post("/users",dbUserController.signupdb)
router.get("/users",dbUserController.getAllUsers)
router.delete("/users/:userId",dbUserController.deleteUser)
router.get("/users/:userId",dbUserController.getUserById)
router.put("/users",dbUserController.updateUser)
router.post("/authenticate",dbUserController.authenticate)



router.post("/roles",roleController.addRole)
router.get("/roles",roleController.getAllRole)

router.post("/employees",employeeController.addEmployee)
router.get("/employees",employeeController.getAllEmployee)

module.exports  = router 