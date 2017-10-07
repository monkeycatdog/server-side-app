const { express, passport } = require('../setup/dependencies');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', {
        signin: req.flash('signin'),
        signup: req.flash('signup')
    });
});

router.post('/signin', passport.authenticate('local-login', {
    successRedirect : '/app',
    failureRedirect : '/',
    failureFlash : true
}), (req, res)=>{});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/',
    failureFlash : true
}), (req, res)=>{});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;