const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {}
};

//===================

const getProductById = async (req, res, next) => {
  try {
    const product = await product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts, getProductById };
