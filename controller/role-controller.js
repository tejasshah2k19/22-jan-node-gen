const RoleModel = require("../model/role-model")


exports.addRole = function(req,res){
    let role = new RoleModel(req.body)

    role.save(function(err,data){
        if(err){
            res.json({status:-1,msg:"smw",data:data})
        }else{
            res.json({status:200,msg:"role added",data:data})
        }
    })
}

exports.getAllRole = function(req,res){

    RoleModel.find(function(err,data){
        if(err){
            res.json({status:-1,msg:"smw",data:data})
        }else{
            res.json({status:200,msg:"role ret..",data:data})
        }
    })
}