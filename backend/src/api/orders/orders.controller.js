const httpStatus = require("http-status");
const service = require("./orders.service");

module.exports.get = (req, res) => {
  service
    .getOrders(req.user.id)
    .then(orders => res.status(httpStatus.OK).json(orders))
    .catch(err => next(err));
};

module.exports.getById = (req, res) => {
  res.send(`getById: ${req.params.id}`);
};

module.exports.post = (req, res) => {
  service
    .createOrder(req.user._id, req.body)
    .then(res.status(httpStatus.CREATED).json("Created"))
    .catch(err => next(err));
};

module.exports.put = (req, res) => {
  res.send("put");
};

module.exports.delete = (req, res) => {
  res.send("delete");
};
