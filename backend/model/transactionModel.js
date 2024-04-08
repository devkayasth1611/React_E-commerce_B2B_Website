const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransactionSchema = new Schema(
    {
        paymentStatus:{
            type:String,
            required:true,
            trim:true,
        },
        transactionDate:{
            type:Date,
            default:Date.now,
        },
        paymentAmount:{
            type:Number,
            required:true,
            trim:true,
        },
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model('Tansaction',TransactionSchema)