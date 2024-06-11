import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    url:{type:String,required:true,unique:true},
    title:{type:String,required:true},
    currentPrice:{type:String,required:true},
    availableDiscount:{type:String,required:true}
},{timestamps:true});

const Product=mongoose.models.Product || mongoose.model('Product',productSchema);

export default Product;