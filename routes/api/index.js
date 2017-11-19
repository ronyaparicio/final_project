const router = require("express").Router();
const Routes = require("./authRoutes");
// Book routes
router.use("/authRoutes", Routes);

module.exports = router;