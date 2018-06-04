const express = require('express');
const router = express.Router();


let checkAuthenticated = require('../services/checkAuthenticated');

// ------------------
//  comment router
// --------------------
let commentsController = require('../controllers/comments');


/**
 * @api {post} comment/addComment add
 * @apiName addComment
 * @apiVersion 0.1.0
 * @apiGroup Comment
 *
 * @apiHeader {String} Authorization authorization token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Token Value"
 *     }
 *
 * @apiParam {String} date     date
 * @apiParam {String} object_id     object _id.
 * @apiParam {Object} fromUser     User Object.
 * @apiParam {Object} toUser     User Object.
 * @apiParam {String} topic_id     topic id.
 * @apiParam {Boolean} isTopic     true/false.
 * @apiParam {String} content     content.

 * @apiParamExample {json} request-body-Example:
 *     {
 *       "date": "2018-05-15",
 *       "object_id": "asdasdafh87weqf",
 *       "fromUser": {User},
 *       "toUser": {User},
 *       "topic_id": "eferwfef",
 *       "isTopic": true,
 *       "content": "Test comment"
 *     }
 * @apiSuccess {boolean} success server status.
 * @apiSuccess {String} message  return message.
 * @apiSuccess {Object} result  comment Object.
 * @apiSuccess {Object} error  exception.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": ""comment added!",
 *       "result": {comment},
 *       "error": exception
 *     }
 */
router.post('/addComment', checkAuthenticated, commentsController.addComment);


/**
 * @api {post} comment/getComments get comments
 * @apiName get Comments
 * @apiVersion 0.1.0
 * @apiGroup Comment
 *
 *
 * @apiParam {String} _id     object_id.
 * @apiParamExample {json} request-body-Example:
 *     {
 *       "_id": "asdasdafh87weqf",
 *     }
 * @apiSuccess {boolean} success server status.
 * @apiSuccess {String} message  return message.
 * @apiSuccess {[Object]} result  comments array.
 * @apiSuccess {Object} error  exception.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "successfully",
 *       "result": [{comment}],
 *       "error": exception
 *     }
 */
router.get('/getComments', commentsController.getComments);


/**
 * @api {post} comment/getCommentsWithRate get comments with rate
 * @apiName get businessman detail Comments
 * @apiVersion 0.1.0
 * @apiGroup Comment
 *
 *
 * @apiParam {String} _id     object_id.
 * @apiParamExample {json} request-body-Example:
 *     {
 *       "_id": "asdasdafh87weqf",
 *     }
 * @apiSuccess {boolean} success server status.
 * @apiSuccess {String} message  return message.
 * @apiSuccess {Object} error  exception.
 * @apiSuccess {[Object]} result  comments array.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "successfully",
 *       "error": err
 *       "result": [{comment}]
 *     }
 */
// router.get('/getCommentsWithRate', commentsController.getCommentsWithRate);

module.exports = router;