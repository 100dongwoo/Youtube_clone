const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = mongoose.Schema({

        writer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        },
        responseTo: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
            type: String
        }
    }
    , {timestamps: true}) //만든날짜와 업데이트한거 됨


const Comment = mongoose.model('Comment', commentSchema);

module.exports = {Comment}