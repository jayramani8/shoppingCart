const express = require("express");
const { route } = require("express/lib/application");
const db = require("../models");
const admin = db.admins;
const router = express.Router();

const registerUser = require("../controllers/user/registerUser");
const userLogin = require("../controllers/user/userLogin");
const userAuth = require("../controllers/user/userAuth");
const viewCart = require("../controllers/user/viewCart");
const placeOrder = require("../controllers/user/placeOrder");
const Product = require("../controllers/admin/Product");

const authMiddleware = require("../middleware/userAuthMiddleware");

//Register a new User
router.post("/registerUser", registerUser.registerUser);

//user Login
router.post("/userLogin", userLogin.userLogin);

//user Authentication
router.get("/userAuth", userAuth.userAuth);

//show all product
router.get("/fetchProduct", authMiddleware.authMiddleware, Product.showProduct);

//view Cart Products
router.get("/viewCart", authMiddleware.authMiddleware, viewCart.viewCart);

//place Order
router.post(
  "/placeOrder",
  authMiddleware.authMiddleware,
  placeOrder.placeOrder
);

module.exports = router;
