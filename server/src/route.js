const groupController = require("./controllers/group-controller");
const individualController = require("./controllers/individual-controller");

const router = require("express-promise-router")();

//User
router.route("/user/new").post(individualController.newUser); //add new user
router.route("/user/:id").get(individualController.getUserbyId); //get data by Id

//Group Tes
router.route("/group/new").post(groupController.newGroup); //create group
router.route("/group/code/:id").get(groupController.sendEmailCode); //send email
router.route("/group/verify/:codeVerify").get(groupController.verifyRole); //verification code

module.exports = router;
