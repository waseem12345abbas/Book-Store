const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_fname:{
        type:String,
        required:true 
    },
    user_age:{
        type:String,
        required:true
    },
    user_city:{
        type:String,
        required:true
    },
    user_gender:{
        type:String,
        required:true
    },
    user_country:{
        type:String,
        required:true
    },
    user_dob:{
        type:String,
        required:true
    },
    user_publish_date:{
        type:Date,
        required:true
    },
    user_status:{
        type:String,
        enum:['enable','disable'],
        default:'enable'
    }

})

// now it is exported the schema
module.exports=mongoose.model('user',userSchema)
