//this controller will be able to control many users

const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'Profile Page'
    });
};

//render the signUp page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
};

//render the signIn page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
};

//get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in creating user while signing up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('Error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })   
}

//sign in and create the session for the user
module.exports.createSession = function(req, res){

}