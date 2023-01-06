module.exports.home = function(req, res){
    //this line send the written code directly to the browser
    //return res.end('<h1>Express is up for Codeial! </h1>');

    //but now we will send response from the views to the browser

    console.log(req.cookies);
    res.cookie('user_id', 25);//editing the cookie value
    return res.render('home', {
        title: "Home"
    });
};