const express = require('express');
const router = express.Router();

let postController = require('./controllers/postController');

// router test
router.get('/test', function (req, res) {
    res.send("Test Hello world");
});

// post API
router.get('/getPosts', postController.getPosts);

router.get('/getPostById', postController.getPostById);

router.post('/addPost', postController.addPost);

router.post('/deletePost', postController.deletePost);

router.post('/updatePost', postController.updatePost);

module.exports = router;