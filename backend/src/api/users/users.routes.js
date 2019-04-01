const router = require("express").Router();
const httpStatus = require("http-status");
const controller = require(`./users.controller`);
const permit = require("../../middleware/permission");

const Role = require("../../enums/roles.enum");

router.get("/", permit(Role.Admin), controller.get);
router.put("/block/:id", permit(Role.Admin), controller.block);
router.put("/edit", controller.editProfile);
router.put("/delete", controller.deleteUser);
router.get("/test", controller.test);

module.exports = router;