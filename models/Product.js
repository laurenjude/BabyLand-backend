const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },

  ratings: {
    count: { type: Number, default: 0 },
    sum: { type: Number, default: 0 },
    average: { type: Number, default: 0 },
  },

  numReviews: { type: Number, default: 0 },

  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      comment: String,
      rating: Number,
    },
  ],
});

module.exports = mongoose.model("product", productSchema);
