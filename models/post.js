const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, //to link user with the post
        ref: 'User'
    }
},{
    timestamps: true // this is done to introduce 2 new fields in the database i.e. createdAt and updatedAt
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;