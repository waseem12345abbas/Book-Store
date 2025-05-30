const mongoose=require('mongoose')
// here it is creating schema for products 
const productSchema=new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    price:Number,
    discountPercentage:Number,
    rating:Number,
    stock:Number,
    tags:[String],
    brand:String,
    sku:String,
    weight:Number,
    dimensions:{
        width:Number,
        height:Number,
        depth:Number,
    },
    warrantyInformation:String,
    shippingInformation:String,
    availabilityStatus:String,
    reviews:[
        {
            rating:Number,
            comment:String,
            date:Date,
            reviewerName:String,
            reviewerEmail:String
        }
    ],
    returnPolicy:String,
    minimumOrderQuantity:Number,
    meta: {
  createdAt:Date,
  updatedAt:Date,
  barcode: String,
  qrCode:String
    },
    images:[String],
    thumbnail:String,
})

// export the schema to use this to create products 
module.exports=mongoose.model('apple_products', productSchema)