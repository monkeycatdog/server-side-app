const { mongoose } = require('../dependencies');
const config = require('../../config/development');
const Account = require('./schemas/Account');

mongoose.connect(config.dbConfig.mongoDb.connection.host, {
    useMongoClient: true
});

mongoose.connection.on('error', (err)=>{
    if (err) throw err;
});

mongoose.Promise = global.Promise;

module.exports = {
    models: {
        Account: mongoose.model('Account', Account)
    },
    mongoose
};