const Order = require("../../models/order.model");
const Status = require("../../enums/status.enum");
const Company = require("../../models/company.model");
const User = require("../../models/user.model");
const { countPrice, countTime } = require("../../services/price.service");
const mailService = require("../../services/mail.service");
const { mailForNewOrder } = require("../../config/mail");

async function createOrder(
  user,
  {
    company,
    address,
    regularity,
    duration,
    date,
    startTime,
    service,
    roomsCount,
    email
  }
) {
  const companySchema = await Company.findOne({
    _id: company,
    "services.name": service
  });
  const coef = companySchema.services.find(o => o.name === service).coefficient;
  const price = countPrice(coef, companySchema.rooms, roomsCount);
  const cleanTime = countTime(coef, companySchema.rooms, roomsCount);
  let customer_id = null;
  console.log("USER:", user);
  if (user) customer_id = user._id;
  const order = new Order({
    customer: customer_id,
    company,
    address,
    regularity,
    duration,
    date,
    startTime,
    service,
    roomsCount,
    price,
    email,
    cleanTime,
    status: Status.Pending
  });
  try {
    await order.save();
    mailService.gmailSend(
      companySchema.email,
      mailForNewOrder(companySchema.name, order._id)
    );
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getOrders(userId, { page, service, status }) {
  const options = {
    page: page || 1,
    limit: 5,
    populate: [
      { path: "customer", select: "name surname email phone" },
      { path: "company", select: "name email" }
    ],
    sort: "-created_at"
  };
  const query = { $or: [{ company: userId }, { customer: userId }] };
  (query.status = { $regex: status || "" }),
    (query.service = { $regex: service || "" });
  const orders = await Order.paginate(query, options);
  return orders;
}

async function acceptOrder(id) {
  await Order.findByIdAndUpdate(id, {
    $set: {
      status: Status.Accepted
    }
  });
  return true;
}

async function rejectOrder(id) {
  await Order.findByIdAndUpdate(id, {
    $set: {
      status: Status.Canceled
    }
  });
  return true;
}

module.exports = {
  createOrder,
  getOrders,
  acceptOrder,
  rejectOrder
};
