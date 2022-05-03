const db = require("../../models");
const User = db.User;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }
    const user = await User.findOne({
      where: { email: email },
    });
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      res.status(200);
      console.log(user.id);
      return res.send({ token: token, id: user.id });
    } else {
      return res.send({ token: "" });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { userLogin };
