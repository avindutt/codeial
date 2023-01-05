//this controller will be able to control many users

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'Profile Page'
    });
};