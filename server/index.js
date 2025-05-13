const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const dbConnection = require("./lib/connection");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
dbConnection()
app.use(express.json());
readdirSync("./routes").map((route) =>
  app.use("api", require(`./routes/${route}`))
);
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
