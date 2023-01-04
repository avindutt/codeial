module.exports.home = function(req, res){
    //this line send the written code directly to the browser
    //return res.end('<h1>Express is up for Codeial! </h1>');

    //but now we will send response from the views to the browser

    return res.render('home', {
        title: "Home"
    });
};