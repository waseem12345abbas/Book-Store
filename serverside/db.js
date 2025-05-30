const mongoose=require('mongoose')
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
        console.log('Connected successfully')
    } catch (error) {
        console.error('Connection Error',error);
        process.exit(1)
    }
}

module.exports=connectDB;