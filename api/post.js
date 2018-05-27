const express = require('express');
const router = express.Router();
let postController = require('../controllers/postController');

// post API
router.get('/getPosts', postController.getPosts);

router.get('/getPostById', postController.getPostById);

router.get('/getPostByUserId', postController.getPostByUserId);

router.post('/addPost', postController.addPost);

router.post('/deletePost', postController.deletePost);

router.post('/updatePost', postController.updatePost);

module.exports = router;