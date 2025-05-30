const mongoose=require('mongoose')
// get the schema 
const Product=require('../model/product')
// data to store in database
const products=require('../data/products.json')

// here connect with the database and store all the data in the database at once
mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
    .then( async ()=>{
        console.log("Connected to MongoDB ")
        const inserted = await Product.insertMany(products.products);
        console.log(`✅ Inserted ${inserted.length} products`);  
        
        await mongoose.disconnect();
        console.log("🔌 Disconnected from MongoDB");
    })
    .catch((err)=>{
        // alert(`Error while saving the data ${err}`)
        console.error(`❌ Error while saving the data: ${err}`)
    })