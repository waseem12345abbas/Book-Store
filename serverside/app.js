const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const createBookRouter = require('./routes/create_books');
const createUserRouter= require('./routes/create_user');
const createProducts=require('./routes/create_products')
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
connectDB().then(() => {
  // route
  app.use("/api", createBookRouter);
  app.use("/api", createUserRouter);
  app.use("/api", createProducts);
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is Running on - http://localhost:${port}`);
  });
}).catch(err=>{
    console.error('Failed to initialize server:', err);
});
