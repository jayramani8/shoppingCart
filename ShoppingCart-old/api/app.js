const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const admin = require("./routes/admin");
const user = require("./routes/user");
var cors = require("cors");
require("./models");
app.use(cors());
app.use(bodyparser.json());
app.use("/", admin);
app.use("/", user);

//static Images Folder
app.use("/Images", express.static("./Images"));

app.listen(8080, () => {
  console.log("start");
});
