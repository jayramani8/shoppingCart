const db = require("../../models");
const Product = db.Product;
const Category = db.Category;

const multer = require("multer");
const path = require("path");

//Add a new product
const addProduct = async (req, res) => {
  const productData = {
    title: req.body.title,
    price: req.body.price,
    category_id: req.body.category,
    quantity: req.body.quantity,
    Description: req.body.Description,
    image: req.file.path,
    createdAt: new Date().toLocaleString(),
  };
  console.log(productData.createdAt);
  const product = await Product.create(productData);
  res.status(200).send(product);
  // console.log(product);
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

//for upload image
const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

//show product
const showProduct = async (req, res) => {
  try {
    const data = await Product.findAll({
      include: [
        {
          model: Category,
        },
      ],
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

//fetch product
const fetchProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    const data = await Product.findAll({
      include: [
        {
          model: Category,
        },
      ],
      where: { id: Id },
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    const updatedProduct = {
      title: req.body.title,
      price: req.body.price,
      category_id: req.body.category,
      quantity: req.body.quantity,
      Description: req.body.Description,
      image: req.body.image ? req.body.image : req.file.path,
      updatedAt: new Date().toLocaleString(),
    };
    await Product.update(updatedProduct, { where: { id: Id } });
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

//delete product
const deleteProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    await Product.destroy({ where: { id: Id } });
    res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addProduct,
  upload,
  showProduct,
  fetchProduct,
  updateProduct,
  deleteProduct,
};
