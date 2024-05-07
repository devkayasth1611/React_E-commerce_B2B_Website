const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema(
    {
        rattings:{
            type:Number,
            required:true,
            trim:true,
        },
        comments:{
            type:String,
            required:true,
            trim:true,
        },
        createdAt:{
            type : Date,
            default : Date.now,
        },
        updatedAt:{
            type : Date,
            default : Date.now,
        }
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model('Feedback',FeedbackSchema)