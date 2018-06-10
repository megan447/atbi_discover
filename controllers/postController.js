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

    getById: function (req, res) {
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
        Post.find({owner: id}, function (err, result) {
            if (result) {
                return res.json({success: true, result: result});
            } else {
                return res.json({success: false, result: null});
            }
        });
    },

    add: function (req, res) {
        let user = req.decodedUser;
        console.log(user);
        let post = new Post();
        let postData = req.body;
        post.status = 1;
        post.post_date = new Date();
        post.update_date = new Date();
        post.owner = user._id;
        post.title = postData.title || ''; // this has to be required at front-end
        post.images = postData.images;   // this has to be required at front-end
        post.content = postData.content || '';  // this can be empty at front-end

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
                return res.json({success: true, message: "inactive post successfully"});
            }
        })
    },

    update: function (req, res) {
        let item = req.body;
        Post.update({'_id': item._id}, {
            $set: {
                'images': item.images,
                'title': item.title,
                'content': item.content,
                'post_date': item.post_date,
                'update_date': new Date(),
            }
        }, function (err) {
            if (err) {
                return res.json({success: false, message: err});
            } else {
                return res.json({success: true, message: "update post successfully"});
            }
        })
    },
};