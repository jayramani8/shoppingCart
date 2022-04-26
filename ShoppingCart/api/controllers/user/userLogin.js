const db = require("../../models");
const User = db.User;
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }
    const result = await User.findOne({
      where: { email: email, password: password },
    });
    if (result) {
      const token = jwt.sign({ id: result.id }, "jayramanijay");
      res.status(200);
      return res.send({ token: token, id: result.id });
    } else {
      return res.send({ token: "" });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { userLogin };
