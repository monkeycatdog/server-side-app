const { express, path } = require('../setup/dependencies');
const router = express.Router();
const checkAuth = require('../setup/authorization/check-auth');

router.all('/', checkAuth);
router.all('/*', checkAuth);

router.get('/', function(req, res, next) {
    res.render('app', { title: JSON.stringify(req.user) });
});

module.exports = router;