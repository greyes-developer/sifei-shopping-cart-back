const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(usersRoutes);
app.use(productsRoutes);

app.listen(4000);
console.log("Server on port 4000");
