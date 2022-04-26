const express = require("express");
const { route } = require("express/lib/application");
const db = require("../models");
const admin = db.admins;
const router = express.Router();

const adminLogin = require("../controllers/admin/adminLogin");

const Category = require("../controllers/admin/Category");

const Product = require("../controllers/admin/Product");

const adminAuth = require("../controllers/admin/adminAuth");

const adminAuthMiddleware = require("../middleware/adminAuthMiddleware");
const middlewareWrapper = require("cors");

//admin login
router.post("/adminlogin", adminLogin.Login);

//admin Authentication
router.get("/adminAuth", adminAuth.adminAuth);

//Add new Category
router.post(
  "/addCategory",
  adminAuthMiddleware.adminAuthMiddleware,
  Category.AddCategory
);

//show Category
router.get(
  "/showCategory",
  adminAuthMiddleware.adminAuthMiddleware,
  Category.showCategory
);

//fetch Category
router.get("/fetchCategory/:id", Category.EditCategory);

//update Categoty
router.put(
  "/updateCategoty/:id",
  adminAuthMiddleware.adminAuthMiddleware,
  Category.UpdateCategory
);

//delete Categoty
router.delete(
  "/deleteCategoty/:id",
  adminAuthMiddleware.adminAuthMiddleware,
  Category.DeleteCategoty
);

//Add a New Product
router.post(
  "/addProduct",
  adminAuthMiddleware.adminAuthMiddleware,
  Product.upload,
  Product.addProduct
);

//show Product
router.get(
  "/showProduct",
  adminAuthMiddleware.adminAuthMiddleware,
  Product.showProduct
);

//fetch Product
router.get("/fetchProduct/:id", Product.fetchProduct);

//update Product
router.put(
  "/updateProduct/:id",
  adminAuthMiddleware.adminAuthMiddleware,
  Product.upload,
  Product.updateProduct
);

//delete Product
router.delete(
  "/deleteProduct/:id",
  adminAuthMiddleware.adminAuthMiddleware,
  Product.deleteProduct
);

module.exports = router;
