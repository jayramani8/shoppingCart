const db = require("../../models");
const Order = db.Order;

const placeOrder = async (req, res) => {
  try {
    const placeOrderData = {
      userId: req.body.userId,
      productId: req.body.productId.toString(),
      totalItem: req.body.TotalItem,
      totalAmount: req.body.totalAmount,
    };
    // console.log(placeOrderData);
    await Order.create(placeOrderData);
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { placeOrder };
