const router = require("express").Router();
const authenticationController = require("../../controllers/authenticationController");
// Matches with "/api/books"
router.route("/")
  .get(authenticationController.findAll)
  .post(authenticationController.create);




// Matches with "/api/books/:id"
router.route("/:id")
  .get(authenticationController.findById)
  .put(authenticationController.update)
  .delete(authenticationController.remove);
module.exports = router;