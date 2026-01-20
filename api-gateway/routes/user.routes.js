const express = require("express");
const axios = require("axios");
const router = express.Router();
const { USER_SERVICE } = require("../config/services");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE}/users`);
    res.json(response.data);
  } catch (error) {
    console.error("User service error:", error.message);
    res.status(500).json({
      message: "User service not reachable"
    });
  }
});3

module.exports = router;
