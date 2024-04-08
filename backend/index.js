const express = require("express"); // creating the server
const mongoose = require("mongoose"); // connecting to database
const app = express();
app.use(express.json);

app.use(express. urlencoded({ extended: true }));



const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const customerRoutes = require("./routes/customerRoutes");
app.use("/customers", customerRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/order", orderRoutes);

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/transacion", transactionRoutes);


mongoose
  .connect("mongodb://127.0.0.1:27017/B2B_Ecommerce")
  .then((sucess) => {
    console.log("Database is connected")
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port => "+3000);
  }
}); //where my services will called()

