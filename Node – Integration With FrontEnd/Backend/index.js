const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/authRoute')
const app = express();

// 1) Middlewares
app.use(cors());
app.use(express.json());

// 2) Route
app.use('/api/auth',authRouter)

// 3) Mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => console.log("connected to mongoDB!"))
  .catch((error) => console.error("failed to connect to MongoDB:", error));

// 4) Global Error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });
  

// 5) Server

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port is ${PORT}`);
});
