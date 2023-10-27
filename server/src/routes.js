const clientConntroller = require('./controllers/client-controller');
const groupController = require('./controllers/group-controller');
const individualController = require('./controllers/individual-controller');
const dataController = require('./controllers/data-controller');
const articleController = require('./controllers/article-controller');

const router = require('express-promise-router')();

//User
router.route('/user/new').post(individualController.newUser); //add new user
router.route('/user/:id/detail').get(individualController.getUserById); //get individual data by Id

//Group Tes
router.route('/group/new').post(groupController.newGroup); //create group
router.route('/group/:id/code').post(groupController.sendEmailCode); //send email
router.route('/group/:codeVerify/verify').post(groupController.verifyRole); //verification code
router.route('/group/:id/data').get(groupController.getGroupById); //get group data by Id
router.route('/group/:id/clients').get(groupController.getClientByGroup); //get data client for group using group Id
router.route('/group/:id/delete').delete(dataController.deleteGroupById); //delete group and client data in it using id

//Client
router.route('/client/:id/new').post(clientConntroller.newClient); //add new client by group Id
router.route('/client/:id/data').get(clientConntroller.getClientById); //get client data by Id

//Search
router.route('/search').post(dataController.searchAllTestData); //search all data test include client, individual and group using query

//Article
router.route('/article/new').post(articleController.newArticle); //add new article via postman
router.route('/article/data').get(articleController.getAllArticle); //get all data article

module.exports = router;
