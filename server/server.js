var path = require('path');

var loopback = require('loopback');
var boot     = require('loopback-boot');
var app      = module.exports = loopback();

var loopbackPassport     = require('loopback-component-passport');
var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

var bodyParser = require('body-parser');

var flash = require('express-flash');

require('node-monkey').start({host: "127.0.0.1", port: "8080"});

var config = {};
try {
    config = require('../providers.json');
} catch (err) {
    console.trace(err);
    process.exit(1);
}


boot(app, __dirname);

app.middleware('parse', bodyParser.json());
app.middleware('parse', bodyParser.urlencoded({
    extended: true
}));

app.middleware('auth', loopback.token({
    model: app.models.accessToken
}));

app.middleware('session:before', loopback.cookieParser('secret'));
app.middleware('session', loopback.session({
    secret           : 'kitty',
    saveUninitialized: true,
    resave           : true
}));

passportConfigurator.init();

app.use(flash());

passportConfigurator.setupModels({

    userModel          : app.models.ExtendedUser,
    userIdentityModel  : app.models.ExtendedUserIdentity,
    userCredentialModel: app.models.ExtendedUserCredential

});

for (var s in config) {

    var c     = config[s];
    c.session = c.session !== false;
    passportConfigurator.configureProvider(s, c);

}

app.get('/auth/account', function (req, res, next) {

    console.log(req);

    res.cookie('access-token', req.signedCookies['access_token']);
    res.cookie('userId', req.accessToken.userId);

    res.redirect('/#/app/loggedIn');

});

app.get('/login', function (req, res, next) {
    console.log(req);
    next();
});

app.get('/auth/logout', function (req, res, next) {

    req.logout();
    res.redirect('/#/home');

});

app.start = function () {
    // start the web server
    return app.listen(function () {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module){
        app.io = require('socket.io')(app.start());
        app.io.on('connection', function(socket){
            console.log('a user connected');
        });
        //app.start();

    }
});
