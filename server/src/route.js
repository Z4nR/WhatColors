const individualController = require("./controllers/individual-controller");

const router = require("express-promise-router")();

//Individual User
router.route("user/new").post(individualController.newUser);
router.route("user/:id").get(individualController.getUserbyId);

module.exports = router;
