import { Router } from 'express';

import { newClient, getClientById } from './controllers/client-controller.js';
import {
  newGroup,
  sendEmailCode,
  verifyRole,
  getGroupById,
  getClientByGroup,
} from './controllers/group-controller.js';
import { newUser, getUserById } from './controllers/individual-controller.js';
import {
  deleteGroupById,
  searchAllTestData,
} from './controllers/data-controller.js';
import { newArticle, getAllArticle } from './controllers/article-controller.js';

const router = Router();

// User
router.route('/user/new').post(newUser);

router.route('/user/:id/detail').get(getUserById);

// Group
router.route('/group/new').post(newGroup);

router.route('/group/:id/code').post(sendEmailCode);

router.route('/group/:codeVerify/verify').post(verifyRole);

router.route('/group/:id/data').get(getGroupById);

router.route('/group/:id/clients').get(getClientByGroup);

router.route('/group/:id/delete').delete(deleteGroupById);

// Client
router.route('/client/:id/new').post(newClient);

router.route('/client/:id/data').get(getClientById);

// Search
router.route('/search').post(searchAllTestData);

// Article
router.route('/article/new').post(newArticle);

router.route('/article/data').get(getAllArticle);

export default router;
