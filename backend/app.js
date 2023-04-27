const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

//middleware contain routes
// app.use("/", (req, res, next) => {
//   res.send("This is connection");
// });

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:n4adx498OpujrwHD@cluster0.z6hynbv.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to db"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
