const Order = require("../../models/order.model");
const Status = require("../../enums/status.enum");

async function createOrder({ customer, executor, productId }) {
  const order = new Order({
    customer,
    executor,
    productId,
    status: Status.Pending
  });
  order.save();
  return order;
}

async function getOrders(userId) {
  return await Order.find({ customer: userId })
    .populate("customer")
    .exec();
}

module.exports = {
  createOrder,
  getOrders
};
