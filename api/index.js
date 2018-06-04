const express = require('express');
const router = express.Router();
// apidoc -i api/ -o apidoc/

router.use('/post', require('./post'));
router.use('/auth', require('./auth'));

module.exports = router;