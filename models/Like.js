// get an instance of mongoose and mongoose.Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let postSchema = require('./Post');

let types = {
    service: postSchema
};

let likeSchema = Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    object_id: {type: Schema.Types.ObjectId},
    type: String
});


//document Serial middleware do before every save, this refers to the document.
likeSchema.pre('save', function (next) {
    let doc = this;
    types[doc.type].findOneAndUpdate({_id: doc.object_id}, {$inc: {like: 1}}, {new: true, upsert: true})
        .then(() => next()).catch(function (error) {
        throw error;
    });
});

//document Serial middleware do before every remove,this refers to the document.
likeSchema.pre('remove', function (next) {
    let doc = this;
    types[doc.type].findOneAndUpdate({_id: doc.object_id}, {$inc: {like: -1}}, {new: true, upsert: true})
        .then(() => next()).catch(function (error) {
        throw error;
    });
});
module.exports = mongoose.model("Like", likeSchema);