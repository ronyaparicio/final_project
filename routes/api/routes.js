const router = require("express").Router();
const authenticationController = require("../../controllers/authenticationController");
// Matches with "/api/books"
router.route("/")
  .post(authenticationController.create);
// Matches with "/api/books/:id"
module.exports = router;