const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MongoDB_URI, () =>
      console.log("MongoDB connecté")
    );
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;