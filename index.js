const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/category");
const morgan = require("morgan");
const app = express();

require("dotenv").config();

mongoose.connect(process.env.ATLAS_URI);
require("./models/products");

//.env variables
const PORT = process.env.PORT || 3000;
const api = process.env.API_URL;

console.log(api);
//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(`${api}/products`, productRouter);
app.use(`${api}/category`, categoryRouter);

app.listen(PORT);
