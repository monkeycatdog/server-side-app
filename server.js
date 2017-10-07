const { http, express, cookieParser, bodyParser, logger, mustache,
    mustacheExpress, path, flash, sassMiddleware, config } = require('./setup/dependencies');

const port = process.env.PORT || config.server.port;

//init app
const app = express();

// view engine setup
app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// set app sessions
const session = require('./setup/sessions');
const httpServer = http.createServer(app);
const server = require('./setup/events')(httpServer, session);
app.use(session);

// flash messages for passport
app.use(flash());

// set passport in app
require('./setup/authorization')(app);
require('./routes/config')(app);

//error handler
const errorHandler = require('./setup/error-handler');
errorHandler.serverHandler(app);


server.listen(port, ()=>{
    console.log(`Server started on ${port}`);
});

server.on('error', errorHandler.onError);

server.on('listening', ()=>{
    errorHandler.onListening(server);
});