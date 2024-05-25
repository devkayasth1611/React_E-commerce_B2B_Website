const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransactionSchema = new Schema(
    {
        // paymentStatus:{
        //     type:String,
        //     required:true,
        //     trim:true,
        // },
        transactionDate:{
            type:Date,
            default:Date.now,
        },
        paymentAmount:{
            type:Number,
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

module.exports = mongoose.model('Transaction',TransactionSchema)