const clientConntroller = require("./controllers/client-controller");
const groupController = require("./controllers/group-controller");
const individualController = require("./controllers/individual-controller");

const router = require("express-promise-router")();

//User
router.route("/user/new").post(individualController.newUser); //add new user
router.route("/user/:id").get(individualController.getUserById); //get individual data by Id

//Group Tes
router.route("/group/new").post(groupController.newGroup); //create group
router.route("/group/:id/code").get(groupController.sendEmailCode); //send email
router.route("/group/:codeVerify/verify").get(groupController.verifyRole); //verification code
router.route("/group/:id/data").get(groupController.getGroupById); //get group data by Id
router.route("/group/:id/clients").get(groupController.getClientByGroup); //get daat client for group using group Id
router.route("/group/:id/delete").delete(groupController.deleteGroupById);

//Client
router.route("/client/:id/new").post(clientConntroller.newClient); //add new client by group Id
router.route("/client/:id/data").get(clientConntroller.getClientById); //get client data by Id

module.exports = router;
