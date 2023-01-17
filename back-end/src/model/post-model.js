const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    userId: String,
    userName: {
        type: String,
        required: [true, 'Username is required']
    },
    userProfile: String,
    like: {
        type: Number,
        default: 0
    },
    images: [String]
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel