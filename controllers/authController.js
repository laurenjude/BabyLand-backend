const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { email, password, repeatPassword } = req.body;

    if (!email || !password || password !== repeatPassword) {
      return res.status(401).json({ message: "Invalid input data" });
    }

    const hashedPaaword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPaaword });

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// =========================

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "invalid input data" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, login };
