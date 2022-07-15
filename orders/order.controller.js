const Order = require("./order.model");

//Get http://localhost:5000/order
async function getOrder(req, res) {
  try {
    const order = await Order.find({});
    res.status(200).send(order);
  } catch (err) {
    res.status(404).send(err);
  }
}

//post http://localhost:5000/order
async function addOrder(req, res) {
  try {
    let order = await Order.create(req.body);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).send(err);
  }
}

//Put http://localhost:5000/order/:order_id
async function updateOrder(req, res) {
  try {
    const orderId = req.params.order_id;
    await Order.findByIdAndUpdate(orderId, req.body);
    return res.status(200).json("Order yangilandi");
  } catch (err) {
    return res.status(400).send(err);
  }
}

//Delete http://localhost:5000/order/:order_id

async function deleteOrder(req, res) {
  try {
    const orderId = req.params.order_id;
    await Order.findByIdAndDelete(orderId);
    return res.status(200).json("Order ochirildi ");
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
