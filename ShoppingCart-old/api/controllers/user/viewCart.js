const { get } = require("express/lib/response");
const db = require("../../models");
const Product = db.Product;
const Category = db.Category;

const viewCart = async (req, res) => {
  const passToken = await req.get("passCart");
  const getToken = passToken.split(" ")[1].split(",");

  console.log(getToken);
  try {
    const Id = req.params.id;
    const data = await Product.findAll({
      include: [
        {
          model: Category,
        },
      ],
      where: {
        id: getToken,
      },
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { viewCart };
