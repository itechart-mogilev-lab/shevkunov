const httpStatus = require("http-status");
const companyService = require("./companies.service");
const Role = require("../../enums/roles.enum");

module.exports.get = async (req, res, next) => {
  companyService
    .getCompanies(req.query)
    .then(data => res.status(httpStatus.OK).json(data))
    .catch(err => next(err));
};

module.exports.test = res => {
  console.log("test");
};
