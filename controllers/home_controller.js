const post = require('../models/post')
module.exports.home = function(req,res){
    // console.log(req.cookies);
    // return res.render('home',{
    //     title:"Home"
    // })
    post.find({},function(err,posts){
        console.log(posts);
         return res.render('home',{
                title:"Codeial | Home",
                posts: posts
            })
    })
}