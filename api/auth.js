const express = require('express');
const router = express.Router();
let authController = require('../controllers/authController');

/**
 * @api {get} auth/edsds fake login
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

/**
 * @api {get} /auth/getByUserId getByUserId
 * @apiName getById
 * @apiVersion 0.1.0
 * @apiGroup Post
 *
 * @apiHeader {String} Authorization authorization token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Token Value"
 *     }
 *
 * @apiParam {UserObject} user object
 * @apiParamExample {json} request-post:
 *     {
 *       "_id": "asdewferwf",
 *       ...
 *     }
 *
 * @apiSuccess {boolean} success http status .
 * @apiSuccess {boolean} result  http result.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "result": true
 *     }
 */
router.get('/getByUserId', authController.getByUserId);

module.exports = router;