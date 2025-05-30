const express=require('express')
const router=express.Router()
const User=require("../model/user")
const { format }=require('date-fns')
const user=require("../model/user")
const userDate= new Date()
// it will select today date from date format
const today=format(userDate, "yyyy-MM-dd")

// here it is send data to the database
router.post("/addUser", async (req, res)=>{
    try {
        const newUser= new User({
            user_name:req.body.user_name,
            user_fname:req.body.user_fname,
            user_age:req.body.user_age,
            user_city:req.body.user_city,
            user_country:req.body.user_country,
            user_gender:req.body.user_gender,
            user_dob:req.body.user_dob,
            user_publish_date:today,
        })
        try {
            const saveUser=await newUser.save()   
            res.json(saveUser)
        } catch (error) {
            console.error('Error while saving the user', error.message)
        }
    } catch (error) {
        console.error('Error while saving the user.', error.message)
    }
})
// now make a get request to fetch data from database
router.get('/viewuser', async(_, res)=>{
    try {
        const users=await user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
})
// here it is exported the router

module.exports=router;