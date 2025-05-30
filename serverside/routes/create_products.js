const express=require('express')
const router=express.Router()
const Products=require('../model/product')

// handle different requests here
router.get("/products", async(_,res)=>{
    try {
        const product=await Products.find()
        res.status(200).json(product)
    } catch (error) {
        console.error('Error while fetching the data', error)
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports=router;