const { passport, LocalStrategy } = require('../dependencies');
const Strategy = LocalStrategy.Strategy;
const md5 = require('md5');
let User = require('../mongoose/models/User');


const salt = 'hello world';

module.exports = function (server) {

    server.use(passport.initialize());
    server.use(passport.session());

    passport.serializeUser(function (user, done) {
        console.info('serializeUser', user);
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, (err, user)=>{
            if(err) done(err);
            console.info('deserializeUser', err, user);
            if(user) done(null, user);
        })
    });

    passport.use('local-signup', new Strategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, username, password, done)=>{

        User.findOne({username}, (err, user)=>{

            if(err) return done(err);
            if(user) return done(null, false, req.flash('signup', 'That username is already taken.'));
            else {
                User.create({username, password: md5(password+salt)}, (er, user)=> {
                    if(err) return done(err);

                    if(user) return done(null, user);
                });
            }

        });

    }));

    passport.use('local-login', new Strategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, username, password, done)=>{

        User.findOne({username}, (err, user)=>{
            if(err) return done(err, false, req.flash('signin', 'No user found.'));

            if(user && user.password === md5(password+salt)) return done(null, user);

            return done(null, false, req.flash('signin', 'Oops! Wrong password.'));
        });
    }));

};