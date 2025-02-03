require("dotenv").config();

const mongoose = require("mongoose");

const productModel = require("./models/Product");

const productAPI = require("./json/products.json");

const upload = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Data Connected");

    console.log("Deleting Previous products...");
    await productModel.deleteMany();

    console.log("Previous Productd Deleted Successfully");

    console.log("uploading Products or updated products");

    try {
      await productModel.create(productAPI);

      console.log(productAPI);

      console.log("Productd Uploaded successfully");
    } catch (creationError) {
      console.log("Error Uploading Products");
    }
    process.exit(0);
  } catch (error) {
    console.log("Error", error.message);

    console.log("unable to connect");
    process.exit(1);
  }
};

upload();
