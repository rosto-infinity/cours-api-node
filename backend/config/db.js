const mongoose = require("mongoose");



const connectDB =  () => { 
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MongoDB_URI)
    .then(() =>{
        console.log("Mongo connecté")
     } ).catch( (err) =>{
      console.log(err);
    //   process.exit();
    })
  };
  module.exports = connectDB;

