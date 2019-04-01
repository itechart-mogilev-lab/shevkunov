const router = require("express").Router();
const httpStatus = require("http-status");
const controller = require(`./companies.controller`);
const permit = require("../../middleware/permission");

const Role = require("../../enums/roles.enum");

// Examples
router.get("/only-admin", permit(Role.Admin), (req, res, next) => {
  res.status(httpStatus.OK).json("GET /only-admin");
});
router.get("/only-user", permit(Role.User), (req, res, next) => {
  res.status(httpStatus.OK).json("GET /only-user");
});

module.exports = router;