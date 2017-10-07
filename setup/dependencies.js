const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');
const sassMiddleware = require('node-sass-middleware');
const debug = require('debug');
const sio = require('socket.io');

// set you config
const config = require('../config/default');

module.exports = {
    http, express, cookieParser, bodyParser,
    passport, logger, mustache,
    mustacheExpress, path, flash, session,
    mongoose, LocalStrategy, sassMiddleware, config, debug,
    sio
};