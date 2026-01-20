const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", authRoutes);


app.use(express.json());

const userRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.listen(3000, () =>
  console.log("API Gateway running on port 3000")
);
