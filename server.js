// =======================
// get the packages we need ============
// =======================
require('dotenv').config();

var express = require('express');
let mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var compression = require('compression')
var config = require('./config/config'); // get our config file
var cors = require('./config/cors');//get Cross-Origin Resource Sharing (CORS) config

app.use(cors);// set CORS

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'ATBI/dist')));

const api = require('./api/index');
//API Router
app.use('/api', api);

mongoose.connect(config.database, function (err) {
    if (!err) {
        console.log("we are connected to mongo in ", config.environment);
        let server = app.listen(config.port, function () {
            console.log('listening on port', server.address().port);
        })
    } else {
        console.log(err);
    }
}); // connect to database