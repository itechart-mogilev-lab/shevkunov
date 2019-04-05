const router = require("express").Router();
const httpStatus = require("http-status");
const controller = require(`./auth.controller`);
const permit = require("../../middleware/permission");
const { authGoogle } = require("../../config/passport");

const Role = require("../../enums/roles.enum");

router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.post("/register", controller.registerUser);
router.post("/register/company", controller.registerCompany);
router.post("/confirmation", controller.confirmationUser);
router.get("/google", authGoogle());
router.get("/google/redirect", authGoogle(), controller.authSocial);
// router.post("/resend", controller.resendPost);

module.exports = router;
