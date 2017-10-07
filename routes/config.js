const index = require('./index');
const app = require('./app');

module.exports = function (server) {

    server.use('/app', app);
    server.use('/', index);

};