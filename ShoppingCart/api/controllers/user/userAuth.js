const jwt = require("jsonwebtoken");
const { use } = require("express/lib/application");

const userAuth = (req, res) => {
  const passToken = req.get("passToken");
  const getToken = passToken.split(" ")[1];

  //   console.log(getToken);
  try {
    const decode = jwt.verify(getToken, "jayramanijay");
    const Id = decode.id;
    if (Id) {
      res.status(200);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { userAuth };
