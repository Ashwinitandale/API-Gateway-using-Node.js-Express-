const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
// app.use(express.json());

router.post("/login", (req, res) => {
  const { username } = req.headers;

  // fake login (for demo)
  const token = jwt.sign(
    { username },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

module.exports = router;
