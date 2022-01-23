const express = require("express");
const DBconnect = require("./DBconnect");
const cors = require("cors");
const app = express();
const PORT = 5000;
DBconnect();
app.use(express.json());
app.use(cors());
app.use("/product", require("./routes/Product"));
app.listen(PORT, (error) =>
  error ? console.log(error) : console.log("server is running!")
);
