const UserModel = require("../model/user-model")

exports.signupdb = function(req,resp){


    let user = new UserModel({
        firstName:req.body.firstName,
        email:req.body.email,
        password:req.body.password
    })
    
    user.save(function(err,data){
        if(err){
            resp.json({data:err,msg:"SMWE",status:-1})
        }   else{

            resp.json({data:data,msg:"signup done",status:200})
        }
    })

}


exports.getAllUsers = function(req,resp)
{

        UserModel.find(function(err,data){
            if(err){
                resp.json({data:err,msg:"SMWE",status:-1})
            }   else{
                resp.json({data:data,msg:"user reterieved...",status:200})
            }   
        })

}
