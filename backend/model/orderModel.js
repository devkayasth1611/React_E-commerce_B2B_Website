const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
    {
        orderDate:{
            type:Date,
            default:Date.now,   
        },
        // orderStatus:{
        //     type:String,
        //     required:true,
        //     trim:true,
        // },
        paymentMethod:{
            type:String,
            required:true,
            trim:true,
        },
        shippingMethod:{
            type:String,
            required:true,
            trim:true,
        },
        totalAmount:{
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
        timestamps : true,
    }
)

module.exports = mongoose.model('Order',OrderSchema)