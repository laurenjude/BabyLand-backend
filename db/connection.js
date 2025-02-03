const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MangoDB successfully");
  } catch (error) {
    console.error("MongoDB connection:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
//laurenjude9(username)
//zxwhmBJi76QEXIyu((password)

//mongodb+srv://laurenjude9:zxwhmBJi76QEXIyu@cluster0.ufhj6.mongodb.net/Baby-toys?retryWrites=true&w=majority&appName=Cluster0
