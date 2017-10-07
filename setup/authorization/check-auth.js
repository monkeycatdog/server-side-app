module.exports = function (req, res, next){
    console.log('check auth: ', req.isAuthenticated());
    req.isAuthenticated()
        ? next()
        : res.redirect('/');
};