const Order = require("../../models/order.model");
const Status = require("../../enums/status.enum");

async function createOrder(
  _id,
  {
    executor,
    address,
    regularity,
    duration,
    date,
    startTime,
    service,
    roomsCount,
    price,
    cleanTime
  }
) {
  const order = new Order({
    customer: _id,
    executor,
    address,
    regularity,
    duration,
    date,
    startTime,
    service,
    roomsCount,
    price,
    cleanTime,
    status: Status.Pending
  });
  try {
    await order.save();
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
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
