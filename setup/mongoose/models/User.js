const User = require('../index').models.Account;

let create = (data, cb)=>{
    new User(data).save(cb);
};

let findOne = (data, cb)=>{
    User.findOne(data, cb);
};

let findById = (id, cb)=>{
    User.findById(id, cb);
};

let findAll = (cb)=>{
    User.find(cb);
};

exports.findOrCreate = (data, cb)=>{
    findOne({username: data.username}, (err, user)=>{
        if(err) return cb(err);
        if(user) return cb(err, user);
        else {
            create(data, (err, newUser)=>{
                cb(err, newUser);
            });
        }
    });
};

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.findOne = findOne;
