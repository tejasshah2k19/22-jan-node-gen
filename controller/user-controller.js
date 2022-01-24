
var users = [] //array 


//signup 
exports.signup = function (req, res) {

    let userId = Math.random().toString().slice(2)
    
    let user = { "firstName": req.body.firstName, "email": req.body.email, "password": req.body.password,"userId":userId }

    users.push(user);
    res.json({ data: user, status: 1, msg: "user added" });
}


exports.listUsers = function (req, res) {
    res.json({data:users,status:1,msg:"user reterived.."})
}

exports.login  = function(req,res){
    let email = req.body.email
    let password = req.body.password 
    isValid = false
    let user

    for(let i=0;i<users.length;i++){
        if(users[i].email == email && users[i].password == password){
            isValid = true
            user = users[i]
            break;
        }
    }

    if(isValid == true){
        //success
        res.json({data:user,staus:1,msg:"authentication done..."})
    }else{
        res.json({data:{email:email,password:password} , msg:"Invalid Credentilas",staus:-1 })
    }
}

exports.deleteUser = function(req,res){
    let userId = req.params.userId
    let index = -1 
    for(let i=0;i<users.length;i++){
            if(users[i].userId == userId){
                index = i
                break
            }
    }
    if(index == -1){
        res.json({data:req.params,status:-1,msg:"Invalid userId"})       
    }else{ 
        users.splice(index,1);
        res.json({data:users,status:200,msg:"user removed..."})
    }
    
} 

exports.deleteUser2 = function(req,res){
    let userId = req.params.userId 
    let oldLength = users.length // 5 

    users = users.filter(user=>user.userId != userId)
    let newLength = users.length 

    if(oldLength == newLength){
        res.json({data:req.params,status:-1,msg:"Invalid userId"})       
    }else{ 
         res.json({data:users,status:200,msg:"user removed..."})
    }
    
}
//body 
exports.updateUser = function(req,res){
    res.json({data:req.body})
}