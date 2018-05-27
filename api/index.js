const express = require('express');
const router = express.Router();
//http://apidocjs.com/#example-versioning
// apidoc -i api/ -o apidoc/

router.use('/discover', require('./post'));

module.exports = router;