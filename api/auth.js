const express = require('express');
const router = express.Router();
let authController = require('../controllers/authController');

/**
 * @api {get} post/get fake login
 * @apiSampleRequest http://localhost:5555/api/auth/fakelogin
 * @apiName fakeLogin
 * @apiVersion 0.1.0
 * @apiGroup Discover/Post
 * @apiSuccess {boolean} success server response status.
 * @apiSuccess {String} message  server message.
 * @apiSuccess {User} user

 * @apiSuccessExample Success-true:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "token sent"
 *       "result": user
 *     }
 */
router.post('/fakeLogin', authController.fakeLogin);


module.exports = router;