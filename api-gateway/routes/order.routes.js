const express = require("express");
const axios = require("axios");
const router = express.Router();
const { ORDER_SERVICE } = require("../config/services");
const auth = require("../middleware/auth.middleware");

router.get("/", auth, async (req, res) => {
  try {
    const response = await axios.get(`${ORDER_SERVICE}/orders`);
    res.json(response.data);
  } catch (error) {
    console.error("orders service error:", error.message);
    res.status(500).json({
      message: "orders service not reachable"
    });
  }
});

module.exports = router;
