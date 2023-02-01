const User = require('../models/user')
module.exports.profile = function(req,res)
{
    return res.render('user_profile',{
        title:"profile"
       })
}
module.exports.signup = function(req,res){
    return res.render("user_sign_up",{
        title: "Codial | Sign Up"
    })
}
module.exports.signin = function(req,res){
    return res.render("user_sign_in",{
        title: "Codial | Sign Up"
    })
}

//get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.Confirm_password){
        return res.redirect('back');
    }
    // User.query.filter_by(email=req.body.email)
    User.findOne({email : req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing up'); return;}
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in finding user in signing up'); return;}
                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

//sign in and create a session for user
module.exports.createSession= function(req,res){
    //Todo later
}
