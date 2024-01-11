const mongoose = require('mongoose');
// create a post schema
const postSchema = mongoose.Schema({
    title: String,
    content: String,
    tags: [String],
    like: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default : 0
    },
    postData: {
        type: Number,
        default: Date.now()
    },
});

module.exports = mongoose.model('Post', postSchema)