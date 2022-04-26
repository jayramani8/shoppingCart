const jwt = require("jsonwebtoken");

const adminAuth = (req, res) => {
  try {
    const passToken = req.get("passToken");
    const getToken = passToken.split(" ")[1];
    const decode = jwt.verify(getToken, "jayramanijay");
    const Id = decode.id;
    if (Id) {
      res.status(200);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { adminAuth };
