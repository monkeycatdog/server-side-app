const Schema = require('mongoose').Schema;

let Account = new Schema({
    username: String,
    password: String
});

module.exports = Account;