const express = require("express");
const rateLimit = require('../api-gateway/middleware/rateLimit.middleware');
const app = express();

app.use(rateLimit);

app.get("/users", (req, res) => {
  res.json({ service: "User", users: ["Ashwini", "Rahul"] });
});

app.listen(3001, () => console.log("User Service on 3001"));
