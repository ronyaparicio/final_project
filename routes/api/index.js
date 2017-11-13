const router = require("express").Router();
const Routes = require("./routes");
// Book routes
router.use("/routes", Routes);
module.exports = router;