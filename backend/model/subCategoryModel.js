const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubCategorySchema = new Schema(
    {
        subCategoryName:{
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

module.exports = mongoose.model('SubCategory', SubCategorySchema)