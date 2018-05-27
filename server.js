// =======================
// get the packages we need ============
// =======================
var express = require('express');
let mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var compression = require('compression')
var config = require('./config/config'); // get our config file
var cors = require('./config/cors');//get Cross-Origin Resource Sharing (CORS) config

const api = require('./api');

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'ATBI/dist')));

//API Router
app.use('/api', api);
const port = 3000;

config.init(3000, function () {
    mongoose.connect(config.database(), function (err) {
        if (!err) {
            console.log("we are connected to mongo in ", config.environment());
            let server = app.listen(port, function () {
                console.log('listening on port', server.address().port);
            })
        } else {
            console.log(err);
        }
    }); // connect to database
}); // connect to database

// var server = app.listen(port, function() {
//     console.log('listening on port', server.address().port);
// });