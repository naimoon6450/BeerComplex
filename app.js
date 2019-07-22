const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
// middleware
app.use(morgan("dev"));
app.use(express.json());

//static serving
app.use(express.static(path.join(__dirname, "./public")));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
