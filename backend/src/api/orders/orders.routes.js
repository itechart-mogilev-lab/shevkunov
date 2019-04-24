const router = require("express").Router();
const permit = require("../../middleware/permission");
const controller = require(`./orders.controller`);
const Role = require("../../enums/roles.enum");

router.get("/", permit(), controller.get);
//router.get("/:id", permit(), controller.getById);
router.post("/", controller.post);
router.put("/:id/accept", permit(Role.Company), controller.acceptOrder);
router.put("/:id/reject", permit(Role.Company), controller.rejectOrder);
router.delete("/:id", permit(), controller.delete);

module.exports = router;
