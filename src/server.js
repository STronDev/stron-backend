const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config;

const app = express.app();
const port = process.env["PORT"] || 8000;
const uri = "mongodb+srv://stron:stron@stronpass.jmukf.mongodb.net/stronpass?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.connection.once("open", () => {
	console.log("MongoDB connection established");
});

app.listen(port, () => {
	console.log(`Connected to PORT: ${port}`);
});
