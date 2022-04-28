const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const passToken = req.get("passToken");
  const getToken = passToken.split(" ")[1];

  try {
    const decode = jwt.verify(getToken, process.env.SECRET_KEY);
    const Id = decode.id;
    if (Id) {
      // console.log("yes");
      res.status(200);
      next();
    } else {
      res.send({ msg: "unAuthorized" });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { authMiddleware };
