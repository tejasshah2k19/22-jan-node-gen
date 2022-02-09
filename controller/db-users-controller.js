const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")

exports.signupdb = function (req, resp) {

    let encPassword =  bcrypt.hashSync(req.body.password,10)
    
    let user = new UserModel({
        firstName: req.body.firstName,
        email: req.body.email,
        password: encPassword 
      })

    user.save(function (err, data) {
        if (err) {
            resp.json({ data: err, msg: "SMWE", status: -1 })
        } else {

            resp.json({ data: data, msg: "signup done", status: 200 })
        }
    })

}


exports.getAllUsers = function (req, resp) {

    UserModel.find(function (err, data) {
        if (err) {
            resp.json({ data: err, msg: "SMWE", status: -1 })
        } else {
            resp.json({ data: data, msg: "user reterieved...", status: 200 })
        }
    })

}


exports.deleteUser = function (req, res) {

    console.log("body ==> ", req.params);
    UserModel.deleteOne({ _id: req.params.userId }, function (err, data) {
        if (err) {
            res.json({ data: err, msg: "SMWE", status: -1 })
        } else {    

            console.log(data.deletedCount);
            if (data.deletedCount == 0) {
                res.json({ data: req.params, msg: "Invalid userId...", status: -1 })
         
            } else {
                res.json({ data: data, msg: "user deleted...", status: 200 })
            }
        }
    })


}


exports.getUserById = function(req,res){
    UserModel.findOne({_id:req.params.userId},function(err,data){
        if (err) {
            res.json({ data: err, msg: "SMWE", status: -1 })
        } else {

           
            if (data) {
                res.json({ data: data, msg: "user rete....", status: 200 })  
            } else {
                res.json({ data: req.params, msg: "Invalid userId...", status: -1 })
            }
        }       
    })

}


exports.updateUser = function(req,res){

    UserModel.findByIdAndUpdate({_id:req.body.userId},{firstName:req.body.firstName},function(err,data){
        if (err) {
            res.json({ data: err, msg: "SMWE", status: -1 })
        } else {

           
            if (data) {
                res.json({ data: data, msg: "user rete....", status: 200 })  
            } else {
                res.json({ data: req.params, msg: "Invalid userId...", status: -1 })
            }
        }       
    })

}


exports.authenticate = function(req,res){
    //email 
    //password 

    //dec 
    isCorrect = true
    UserModel.findOne({email:req.body.email},function(err,data){
        if(data == null){
            isCorrect = false 
        }else{
                isCorrect = bcrypt.compareSync(req.body.password,data.password)
        }

        if(isCorrect){
            res.json({msg:"authentication done",status:200,data:data})
        }else{
            res.json({msg:"invalid credentials..",status:-1,data:req.body})
        }
    })

}