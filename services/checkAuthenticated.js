/* ******************************************************
// This service is designed for checking token for access
// Author: Jiangqi Li
//
********************************************************* */

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/config'); // get our config file

module.exports = function (req, res, next) {
    // check header or url parameters or post parameters for token
    let token = req.header('Authorization') || req.param('token');
//    console.log("from auth "+JSON.stringify(token));
    if (!token) {
        return res.send({valid: false, success: false, message: 'Please make sure you have logged in'});
    }
    // decode token
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.send({valid: false, success: false, message: 'Failed to authenticate token, login expires'});
        } else {
            req.decodedUser = decoded._doc;
            next();
        }
    });
};