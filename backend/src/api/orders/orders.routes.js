const router = require("express").Router();
const permit = require("../../middleware/permission");
const controller = require(`./orders.controller`);

router.get("/", permit(), controller.get);
router.get("/:id", permit(), controller.getById);
router.post("/", permit(), controller.post);
router.put("/:id", permit(), controller.put);
router.delete("/:id", permit(), controller.delete);

module.exports = router;
