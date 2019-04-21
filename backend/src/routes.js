const router = require("express").Router();
const { version } = require("../package.json");

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "API",
    data: {
      version: `${version}`
    }
  });
});

router.use("/auth", require("./api/auth").router);
router.use("/users", require("./api/users").router);
router.use("/orders", require("./api/orders").router);
router.use("/companies", require("./api/companies").router);
router.use("/reviews", require("./api/reviews").router);

module.exports = router;
