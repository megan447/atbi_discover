// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var commentSchema = new Schema({
    date: Date,
    object_id: String,
    topic_id: String,
    isTopic: Boolean,
    content: String,
    status: Number,
    like: Number,
    fromUser: {type: Schema.Types.ObjectId, ref: 'User'},
    toUser: {type: Schema.Types.ObjectId, ref: 'User'}
});

// the schema is useless so far
// we need to create a model using it
var post = mongoose.model('Comment', commentSchema);

// make this available to our users in our Node applications
module.exports = post;