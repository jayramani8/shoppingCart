const db = require("../../models");
const admin = db.Admin;
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }
    const result = await admin.findOne({
      where: { email: email, password: password },
    });
    if (result) {
      const token = jwt.sign({ id: result.id }, "jayramanijay");
      res.status(200);
      return res.send({ token: token });
    } else {
      return res.send({ token: "" });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { Login };
