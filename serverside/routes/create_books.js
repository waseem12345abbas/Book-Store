const express = require("express");
const router = express.Router();
const Book = require("../model/book");
const { format } = require("date-fns");
const book = require("../model/book");
const crud = new Date();
const today = format(crud, "yyyy-MM-dd");

// for send data to db
router.post("/addbook", async (req, res) => {
  try {
    const newBook = new Book({
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      book_price: req.body.book_price,
      book_publish_date: today,
    });
    try {
      const saveBook = await newBook.save();
      res.json(saveBook);
    } catch (error) {
      console.error("Error while saving the data", error);
    }
  } catch (error) {
    console.error(error);
  }
});

// get data from db and show on client side frontend
router.get("/viewbook", async (_, res) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// view the updated book
router.get('/viewbook/:id', async(req, res)=>{
  try {
    const findBook=await book.findById(req.params.id)
    res.status(200).json(findBook)
  } catch (error) {
    res.status(500).json({"Error":error})
  }
})
// update the book
router.put('/updatebook/:id', async(req, res)=>{
  try {
    const updateBook= await book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )
    res.status(200).json(updateBook)
  } catch (error) {
    console.error("Error updating the book", error)
  }
})
// here is the route to delete the books
router.delete('/deletebook/:id', async(req, res)=>{
  try {
    const books = await
    Book.findByIdAndDelete(req.params.id)
    res.status(200).json(books)
  } catch (error) {
    console.error(error);
  }
})
module.exports = router;