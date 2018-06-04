let Comment = require('../models/Comment');// get our mongoose model
let mongoose = require('mongoose');

module.exports = {
    getComments: async function (req, res) {
        try {
            let object_id = req.query.id;
            Comment.find({object_id: object_id, parent: null})
                .populate('fromUser', '_id username imageUrl')
                .populate('toUser', '_id username imageUrl')
                .populate('parent')
                .populate({
                    path: 'children',
                    // Get fromUser of children - populate the 'from user' object for every comment children
                    populate: {path: 'fromUser', select: '_id username imageUrl'}
                })
                .exec(function (err, result) {
                    if (result) {
                        return res.json({success: true, message: 'Got comments successfully', result: result});
                    }
                    if (err) {
                        return res.json({success: false, message: "cannot found.", error: err});
                    }
                });
        } catch (e) {
            return res.json({success: false, message: "cannot found this info", error: e});
        }
    },

    addComment: function (req, res) {
        let hasParent = req.body.parent;

        let comment = new Comment({
            date: new Date(),
            children: [],
            content: req.body.content,
            object_id: req.body.object_id,
            parent: req.body.parent ? mongoose.Types.ObjectId(req.body.parent._id) : null,
            fromUser: req.body.fromUser ? mongoose.Types.ObjectId(req.body.fromUser._id) : null,
            toUser: req.body.toUser ? mongoose.Types.ObjectId(req.body.toUser._id) : null,
            like: 0,
            status: 1,
        });

        if (hasParent) {
            let parent_id = req.body.parent ? req.body.parent._id : '';
            Comment.findByIdAndUpdate(parent_id, {$push: {children: comment}}, function (doc) {
                comment.save(function (err, result) {
                    if (err) {
                        return res.json({success: false, message: err});
                    } else {
                        return res.json({success: true, message: "comment added!", result: result});
                    }
                });
            });
        } else {
            comment.save(function (err, result) {
                if (err) {
                    return res.json({success: false, message: err});
                } else {
                    return res.json({success: true, message: "comment added!", result: result});
                }
            });
        }
    },

    // getCommentsWithRate: async function (req, res) {
    //     try {
    //         let object_id = req.query._id;
    //         let allComments = await getPureComments(object_id);
    //         if (allComments.length === 0) {
    //             return res.json({comments: [], success: true, message: "successfully"});
    //         }
    //         Rate.find({businessMan_id: object_id}, function (err, result) {
    //             if (err) {
    //                 return res.json({success: false, message: "cannot found this info"});
    //             }
    //             if (result) {
    //                 let rateMap = new Map();
    //                 for (let i = 0; i < result.length; i++) {
    //                     rateMap.set(result[i].user_id.toString(), result[i].rate_avg);
    //                 }
    //                 result.usersRating = rateMap;
    //                 result.comments = comments;
    //                 return res.json({result: result, success: true, message: "successfully"});
    //             }
    //         });
    //     } catch (e) {
    //         return res.json({success: false, message: "cannot found this info", error: e});
    //     }
    // },
};

// return promise
// let getPureComments = function (object_id) {
//     return new Promise(function (resolve, reject) {
//         Comment.find({object_id: object_id, parent: null})
//             .populate('fromUser', '_id firstName imageUrl')
//             .populate('toUser', '_id firstName imageUrl')
//             .populate('parent')
//             .populate({
//                 path: 'children',
//                 // Get fromUser of children - populate the 'from user' object for every comment children
//                 populate: {path: 'fromUser', select: '_id firstName imageUrl'}
//             })
//             .exec(function (err, result) {
//                 if (result) {
//                     resolve(result);
//                 }
//                 if (err) {
//                     reject(err)
//                 }
//             });
//     });
// };
//
