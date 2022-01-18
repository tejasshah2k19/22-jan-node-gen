
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

