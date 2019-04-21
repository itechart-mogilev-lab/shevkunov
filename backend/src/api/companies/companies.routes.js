const router = require("express").Router();
const httpStatus = require("http-status");
const controller = require(`./companies.controller`);
const permit = require("../../middleware/permission");

const Role = require("../../enums/roles.enum");

router.get("/", controller.get);
router.get("/:id", controller.getCompanyById);
router.put("/edit", permit(Role.Company), controller.editCompanyProfile);
router.get("/test", controller.test);

module.exports = router;
