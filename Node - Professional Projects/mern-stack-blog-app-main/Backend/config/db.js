const mongoose = require("mongoose");
const colors = require("colors");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  const uri = process.env.MONGO_URL;

  try {
    await mongoose.connect(uri);
    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
