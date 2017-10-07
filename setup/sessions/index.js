const { session } = require('../dependencies');
const config = require('../../config/development');

module.exports = session({
        secret: config.session.secret,
        key: config.session.key,
        cookie: config.session.cookie,
        unset: 'destroy',
        resave: true,
        saveUninitialized: true
    });