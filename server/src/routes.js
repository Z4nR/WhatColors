const express = require('express');

const clientController = require('./controllers/client-controller');
const groupController = require('./controllers/group-controller');
const individualController = require('./controllers/individual-controller');
const dataController = require('./controllers/data-controller');
const articleController = require('./controllers/article-controller');

const router = express.Router();

// User
router.route('/user/new').post(individualController.newUser);

router.route('/user/:id/detail').get(individualController.getUserById);

// Group
router.route('/group/new').post(groupController.newGroup);

router.route('/group/:id/code').post(groupController.sendEmailCode);

router.route('/group/:codeVerify/verify').post(groupController.verifyRole);

router.route('/group/:id/data').get(groupController.getGroupById);

router.route('/group/:id/clients').get(groupController.getClientByGroup);

router.route('/group/:id/delete').delete(dataController.deleteGroupById);

// Client
router.route('/client/:id/new').post(clientController.newClient);

router.route('/client/:id/data').get(clientController.getClientById);

// Search
router.route('/search').post(dataController.searchAllTestData);

// Article
router.route('/article/new').post(articleController.newArticle);

router.route('/article/data').get(articleController.getAllArticle);

module.exports = router;
