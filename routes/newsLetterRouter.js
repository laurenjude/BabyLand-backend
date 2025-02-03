const express = require("express");
const newsLetter = require("../controllers/NewsLetterController");

const router = express.Router();

router.post("/newsletter", newsLetter);

module.exports = router;
