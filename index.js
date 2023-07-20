const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/category");
const adminRouter = require("./routes/admin");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();
require("./firebase");

mongoose.connect(process.env.ATLAS_URI);
require("./models/product");

//.env variables
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(`/products`, productRouter);
app.use(`/category`, categoryRouter);
app.use(`/admin`, adminRouter);

app.listen(PORT);
