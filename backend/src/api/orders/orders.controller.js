const httpStatus = require("http-status");
const service = require("./orders.service");

module.exports.get = (req, res) => {
  service
    .getOrders(req.user.id, req.query)
    .then(orders => res.status(httpStatus.OK).json(orders))
    .catch(err => next(err));
};
module.exports.post = (req, res) => {
  service
    .createOrder(req.user, req.body)
    .then(res.status(httpStatus.CREATED).json("Created"))
    .catch(err => next(err));
};

module.exports.acceptOrder = (req, res) => {
  service
    .acceptOrder(req.params.id)
    .then(res.status(httpStatus.OK).json("Order accepted"))
    .catch(err => next(err));
};

module.exports.rejectOrder = (req, res) => {
  service
    .rejectOrder(req.params.id)
    .then(res.status(httpStatus.OK).json("Order accepted"))
    .catch(err => next(err));
};

module.exports.delete = (req, res) => {
  res.send("delete");
};
