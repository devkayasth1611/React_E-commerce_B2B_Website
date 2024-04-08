const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const CustomerSchema = new Schema(
    {
        customerName:{
            type : String,
            required : true,
            trim : true,
        },
        customerContactNo:{
            type : Number,
            required : true,
            trim : true,
        },
        customerEmail:{
            type : String,
            required : true,
            trim : true,
        },
        customerAddress:{
            type : String,
            required : true,
            trim : true,
        },
        createdAt:{
            type : Date,
            default : Date.now,
        }
    },
    {
        timeStamps : true,
    }
) 

module.exports = mongoose.model('Customer',CustomerSchema)