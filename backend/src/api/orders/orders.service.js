const Order = require("../../models/order.model");
const Status = require("../../enums/status.enum");
const Company = require("../../models/company.model");
const { countPrice, countTime } = require("../../services/price.service");
const mailService = require("../../services/mail.service");
const { mailForNewOrder } = require("../../config/mail");

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
    roomsCount
  }
) {
  const company = await Company.findOne({
    _id: executor,
    "services.name": service
  });
  const coef = company.services.find(o => o.name === service).coefficient;
  const price = countPrice(coef, company.rooms, roomsCount);
  const cleanTime = countTime(coef, company.rooms, roomsCount);

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
    mailService.gmailSend(
      company.email,
      mailForNewOrder(company.name, order._id)
    );
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
