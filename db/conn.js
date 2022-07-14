// package import
const mongoose = require("mongoose");

//mongoDB connection string
const connectionString =
  "mongodb+srv://Osama-Tariq:OsamaTariq@cluster0.rdulf.mongodb.net/Employee-api?retryWrites=true&w=majority";

  mongoose
  .connect(connectionString)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.log(error.message);
  });
