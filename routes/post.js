const express = require('express');
const postController = require('../controllers/post');
const router = express.Router();




router.get('/question-1',postController.getQuestion1);
router.get('/question-2',postController.getQuestion2);


module.exports = router;