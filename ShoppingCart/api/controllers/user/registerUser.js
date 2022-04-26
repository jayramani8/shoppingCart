const db = require("../../models");
const User = db.User;
const registerUser = async (req, res) => {
  try {
    const registerData = {
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    };
    console.log(registerData);
    await User.create(req.body);
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { registerUser };
