let User = require('../models/User');// get our mongoose model
let jwt = require('jsonwebtoken'); // used to create, sign, and letify tokens
let config = require('../config/config')

module.exports = {
    fakeLogin: function (req, res) {
        let id = req.body._id;
        User.findOne({_id: id}, function (err, result) {
            if (result) {
                let user = new User();
                user._id = result._id;
                user.username = result.username;
                user.imageUrl = result.avatar;

                let token = jwt.sign(user, config.secret(), {
                    expiresIn: 60 * 60// expires in seconds
                });

                // return the information including token as JSON
                return res.json({
                    result: result,
                    success: true,
                    message: 'token sent',
                    token: token
                });
            } else {
                return res.json({success: false, result: null});
            }
        });
    },
};