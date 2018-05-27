// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var postSchema = new Schema({
    images: [],
    title: String,
    content: String,
    post_date: Date,
    update_date: Date,
    type: String,
    status: Number,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    like: Number
});

// the schema is useless so far
// we need to create a model using it
var post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = post;
