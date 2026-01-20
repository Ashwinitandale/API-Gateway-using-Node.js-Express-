const express = require("express");
const app = express();

app.get("/orders", (req, res) => {
  res.json({ service: "Order", orders: ["Order1", "Order2"] });
});

app.listen(3002, () => console.log("Order Service on 3002"));
