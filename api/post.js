const express = require('express');
const router = express.Router();
let postController = require('../controllers/postController');

let checkAuthenticated = require('../services/checkAuthenticated');
/**
 * @api {get} post/getAll get all posts
 * @apiSampleRequest http://localhost:5555/api/post/getAll
 * @apiName getAll
 * @apiVersion 0.1.0
 * @apiGroup Discover/Post
 * @apiSuccess {boolean} success server response status.
 * @apiSuccess {String} message  server message.
 * @apiSuccess {[Object]} posts List.

 * @apiSuccessExample Success-true:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "Get posts successfully"
 *       "posts": [{...},{...},{...}]
 *     }
 */
router.get('/getAll', postController.getAll);

/**
 * @api {get} /post/getByUser getByUser
 * @apiName getByUser
 * @apiVersion 0.1.0
 * @apiGroup Post
 *
 * @apiHeader {String} Authorization authorization token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Token Value"
 *     }
 *
 * @apiParam {Post} user object
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
router.get('/getByUser', postController.getByUser);

/**
 * @api {get} /post/getById getById
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
 * @apiParam {Post} user object
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
router.get('/getById', postController.getById);


/**
 * @api {post} post/add add
 * @apiName add
 * @apiVersion 0.1.0
 * @apiGroup Post
 *
 *
 * @apiSuccess {post} success http status .
 * @apiSuccess {post} result  http result.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
*       "success": true,
*       "result": true
*     }
 */
router.post('/add', checkAuthenticated, postController.add);


/**
 * @api {post} post/delete delete
 * @apiName delete
 * @apiVersion 0.1.0
 * @apiGroup Post
 *
 *
 * @apiSuccess {post} success http status .
 * @apiSuccess {post} result  http result.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
*       "success": true,
*       "result": true
*     }
 */
router.post('/delete', postController.delete);


/**
 * @api {post} post/update
 * @apiName update
 * @apiVersion 0.1.0
 * @apiGroup Post
 *
 * @apiHeader {String} Authorization authorization token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Token Value"
 *     }
 *
 * @apiParam {_id} post  object
 * @apiParamExample {json} request-body-Example:
 *     {
 *       "_id": "asdewferwf",
 *       ...
 *     }
 *
 * @apiSuccess {boolean} success http status .
 * @apiSuccess {boolean} result  post result.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "result": true
 *     }
 */
router.post('/update', postController.update);
module.exports = router;