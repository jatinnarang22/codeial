const post = require('../models/post');
module.exports.myposts = function(req,res)
{
    post.create({
        content: req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){
            console.log('err in creating a post');
            return ;

        }
        return re.redirect('back');
    })
    res.end('<h1>my posts</h1>')
}
