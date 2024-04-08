const mongoose = require("mongoose"); 
const Schema = mongoose.Schema
const ProductSchema = new Schema(
    {
        productName:{
            type: String,
            required: true, 
            trim : true,
        },
        productDetails:{
            type: String,
            required: true,
            trim : true,
        },
        productPrice:{
            type: Number,
            required: true,
            trim : true,
        },
        productQuantity:{
            type: Number,
            required: true,
            trim : true,
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