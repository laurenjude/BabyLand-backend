const { json } = require("express");
const Newsletter = require("../models/Newsletter");

const newsLetter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const existingSubscription = await Newsletter.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: "Email is already subscribe" });
    }

    const newSubscription = new Newsletter({ email });
    await newSubscription.save();
    res.status(200).json({ message: "Subscription successfull" });
  } catch (err) {
    console.error("Error saving subscription:", error);
    res.status(500).json({ message: "Failed to Subscribe" });
  }
};

module.exports = newsLetter;
