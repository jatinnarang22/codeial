const User = require('../models/user')
/** @type {import("express").RequestHandler} */
     
module.exports.profile = function(req,res)
{
    console.log(req.cookies);
    if(req.cookies && req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                    title:"User profile",
                    user:user
                   })
            }
            return res.redirect('/users/si gn-in');
        });
    }
    else{
        return res.redirect('/users/sign-in');
    }
    

}
module.exports.signup = function(req,res){
    return res.render("user_sign_up",{
        title: "Codial | Sign Up"
    })
}
module.exports.signin = function(req,res){
    console.log(true);
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
module.exports.createSession = function(req,res){

        //step to authenticate
        // find the user
        User.findOne({email : req.body.email},function(err,user){
            if(err){console.log('error in finding user in signing in'); return;}
              // handle user found
                if(user){
                    // handle passowrd which don't match
                    if(user.password != req.body.password){
                        return res.redirect('back');
                    }
                    // handle session creation 
                    res.cookie('user_id',user.id);
                    return res.redirect('/users/profile')
              }
              else{
                console.log('user.found;');
                // handle user not found
                return res.redirect('back');
              }
        });
}
