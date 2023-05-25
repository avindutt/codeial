const Post = require('../models/post');

module.exports.home = function(req, res){
   // console.log(req.cookies);
   // res.cookie('user_id', 25);//editing the cookie value

//    Post.find({}, function(err, posts){
//     return res.render('home', {
//         title: "Codeial | Home",
//         posts: posts
//     });
//    });

   Post.find({})
   .populate('user')
   .populate({
      path: 'comments',
      populate: {
         path: 'user'
      }
   })
   .exec(function(err, posts){ // doing this will give the whole user object instead of just user id
    return res.render('home', {
        title: "Codeial | Home",
        posts: posts
    });
   });

};