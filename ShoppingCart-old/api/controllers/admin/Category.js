const db = require("../../models");
const Category = db.Category;

// add a new category
const AddCategory = async (req, res) => {
  try {
    const categoryData = {
      title: req.body.title,
      Description: req.body.Description,
      createdAt: new Date().toLocaleString(),
    };

    await Category.create(categoryData);
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

//edit category
const EditCategory = async (req, res) => {
  try {
    const Id = req.params.id;
    const result = await Category.findAll({ where: { id: Id } });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

// show category
const showCategory = async (req, res) => {
  try {
    const result = await Category.findAll({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

// update category
const UpdateCategory = async (req, res) => {
  try {
    const Id = req.params.id;
    const categoryData = {
      title: req.body.title,
      Description: req.body.Description,
    };
    await Category.update(categoryData, { where: { id: Id } });
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

// delete category
const DeleteCategoty = async (req, res) => {
  try {
    const Id = req.params.id;
    await Category.destroy({ where: { id: Id } });
    res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  AddCategory,
  EditCategory,
  showCategory,
  UpdateCategory,
  DeleteCategoty,
};
