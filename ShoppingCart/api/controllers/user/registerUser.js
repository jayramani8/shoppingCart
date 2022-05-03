const db = require("../../models");
const User = db.User;
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  try {
    const hasPassword = await bcrypt.hash(req.body.password, 12);

    console.log(req.body);
    const registerData = {
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
      password: hasPassword,
    };
    console.log(registerData);
    await User.create(registerData);
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { registerUser };
