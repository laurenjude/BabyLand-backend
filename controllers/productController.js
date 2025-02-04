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

// ==============

const rateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { rating } = req.body;
  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.ratings.count += 1;
    product.ratings.sum += rating;
    product.ratings.average = product.ratings.sum / product.ratings.count;

    await product.save();

    res.status(200).json({
      message: "Rating submitted successfully",
      updatedRatings: product.ratings,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts, getProductById, rateProduct };
