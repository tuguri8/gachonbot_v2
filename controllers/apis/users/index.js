'use strict';

const
    express = require('express'),
    // userService = require('../../../services/users'),
    // models = require('../../../models'),
    chatbotService = require('../../../services/users/chatbot');

let router = express.Router();

console.log('apis/users/index.js called');
/**
 * api/v1/users/
 */
// router.use(chatbotService.checkTokenVerified);
router.get('/test', chatbotService.test);
router.post('/posttest', chatbotService.posttest);

// router.use('/*', models.verifyAPIKEY); //현재 미사용
// ^Middleware. Make sure to put all the routes which needs authentication below this middleware.

module.exports = router;