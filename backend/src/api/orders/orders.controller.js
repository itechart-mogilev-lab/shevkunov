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
  const model = {
    customer: req.user.id,
    executor: req.body.executor,
    productId: req.body.productId
  }

  service
    .createOrder(model)
    .then(order => res.status(httpStatus.CREATED).json(order))
    .catch(err => next(err));
};

module.exports.put = (req, res) => {
  res.send("put");
};

module.exports.delete = (req, res) => {
  res.send("delete");
};
