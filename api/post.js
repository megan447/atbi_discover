const express = require('express');
const router = express.Router();
let postController = require('../controllers/postController');

/**
 * @api {get} discover/getPosts get all posts
 * @apiSampleRequest http://localhost:5555/api/discover/getPosts
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
router.get('/getPosts', postController.getPosts);

router.get('/getPostById', postController.getPostById);

router.get('/getPostByUserId', postController.getPostByUserId);

router.post('/addPost', postController.addPost);

router.post('/deletePost', postController.deletePost);

router.post('/updatePost', postController.updatePost);

module.exports = router;