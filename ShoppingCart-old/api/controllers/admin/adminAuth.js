const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminAuth = (req, res) => {
  try {
    const passToken = req.get("passToken");
    const getToken = passToken.split(" ")[1];
    const decode = jwt.verify(getToken, process.env.SECRET_KEY);
    const Id = decode.id;
    if (Id) {
      res.status(200);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { adminAuth };
