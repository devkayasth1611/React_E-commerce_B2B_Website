const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const ProductSchema = new Schema(
    {
        productName:{
            type: String,
            // required: true, 
        },
        productDetails:{
            type: String,
            // required: true,
        },
        productPrice:{
            type: Number,
            // required: true,
        },
        productQuantity:{
            type: Number,
            // required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        updatedAt:{
            type: Date,
            default: Date.now
        }
    },
    {
        timeStamps : true
    }
)

module.exports = mongoose.model('Product',ProductSchema)