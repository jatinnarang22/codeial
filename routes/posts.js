const express = require('express');
const router = express.Router();

const postController =require('../controllers/posts_controller');

router.get('/create',postController.create);      

module.exports =router;