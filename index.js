const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://aaronprince:aaronprincepassword@cluster0.h4zum.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connect to mongodb atlas.");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
