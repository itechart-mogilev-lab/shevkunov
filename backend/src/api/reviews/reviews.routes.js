const router = require("express").Router();
const controller = require(`./reviews.controller`);
const permit = require("../../middleware/permission");
const Role = require("../../enums/roles.enum");

router.get("/", permit([Role.User, Role.Company]), controller.get);
router.get("/:id", controller.getReviewsCompany);
router.post("/", permit(Role.User), controller.post);

module.exports = router;
