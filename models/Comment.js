// get an instance of mongoose and mongoose.Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = Schema({
    // object id, can be article, post, blog, businessman
    object_id: String,
    // comment content text
    content: String,
    // Mixed parent, can be [comment objects] or [comment _id(s)} or null - 1st level
    parent: {type: Schema.Types.ObjectId, ref: 'Comment'},
    // Mixed children, can be [comment objects] or [comment _id(s)}
    children: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    // For notifications && poster preview
    fromUser: {type: Schema.Types.ObjectId, ref: 'User'},
    toUser: {type: Schema.Types.ObjectId, ref: 'User'},
    // Generated
    date: Date,
    // For deleted
    status: Number,
    // comment likes
    like: Number,
});


module.exports = mongoose.model("Comment", commentSchema);
