let Post = require('../models/Post');// get our mongoose model

module.exports = {
    getAll: function (req, res) {
        Post.find({}, function (err, results) {
            if (results) {
                return res.json({success: true, result: results});
            } else {
                return res.json({success: false, result: null});
            }
        });
    },

    getPostById: function (req, res) {
        let id = req.query._id;
        Post.findOne({_id: id}, function (err, result) {
            if (result) {
                return res.json({success: true, result: result});
            } else {
                return res.json({success: false, result: null});
            }
        });
    },

    getByUser: function (req, res) {
        let id = req.query._id;
        Post.findOne({owner: id}, function (err, result) {
            if (result) {
                return res.json({success: true, result: result});
            } else {
                return res.json({success: false, result: null});
            }
        });
    },

    add: function (req, res) {
        let post = new Post();
        var postData = req.body;
        post.status = 1;
        post.post_date = new Date();
        post.update_date = new Date();

        post.title = postData.title || ''; // this has to be required at front-end
        post.images = postData.images;   // this has to be required at front-end
        post.contetn = postData.contetn || '';  // this can be empty at front-end

        post.save(function (err, result) {
            if (result) {
                return res.json({success: true, result: result});
            } else {
                return res.json({success: false, result: null});
            }
        });
    },

    delete: function (req, res) {
        let item = req.body;
        Post.update({'_id': item._id}, {$set: {'status': 0}}, function (err) {
            if (err) {
                return res.json({success: false, message: err});
            } else {
                return res.json({success: true, message: "inactive Carpool suessfully"});
            }
        })
    },

    update: function (req, res) {
        let item = req.body;
        Post.update({'_id': item._id}, {
            $set: {
                'images': item.email,
                'title': item.mobile,
                'content': item.price,
                'post_date': item.email,
                'update_date': new Date(),
            }
        }, function (err) {
            if (err) {
                return res.json({success: false, message: err});
            } else {
                return res.json({success: true, message: "update Carpool suessfully"});
            }
        })
    },
};