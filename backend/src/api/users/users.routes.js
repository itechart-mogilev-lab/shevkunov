const router = require("express").Router();
const httpStatus = require("http-status");
const controller = require(`./users.controller`);
const permit = require("../../middleware/permission");

const Role = require("../../enums/roles.enum");

router.get("/", permit(Role.Admin), controller.get);
router.put("/block/:id", permit(Role.Admin), controller.block);
router.put("/edit", permit(Role.User), controller.editProfile);
router.put("/delete", permit(Role.Admin), controller.deleteUser);

module.exports = router;
