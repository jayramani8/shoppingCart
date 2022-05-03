const jwt = require("jsonwebtoken");
const { use } = require("express/lib/application");
require("dotenv").config();

const userAuth = (req, res) => {
  const passToken = req.get("passToken");
  const getToken = passToken.split(" ")[1];

  //   console.log(getToken);
  try {
    const decode = jwt.verify(getToken, process.env.SECRET_KEY);
    const Id = decode.id;
    if (Id) {
      res.status(200);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { userAuth };
