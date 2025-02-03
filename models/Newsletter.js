const mongoose = require("mongoose");

const newsLetterShema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model("Newsletter", newsLetterShema);
