const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema(
    {
        adminName:{
            type:String,
            required:true,
            trim:true,
        },
        adminEmail:{
            type:String,
            required:true,
            trim:true,
        },
        adminAddress:{
            type:String,
            required:true,
            trim:true,
        },
        adminPassword:{
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

module.exports = mongoose.model('Admin', AdminSchema)