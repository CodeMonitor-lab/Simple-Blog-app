const express = require('express');
const router = express.Router()
const {createPost,getAllPost,getPostById} = require('../controller/blogPostController');

router.post('/create',createPost)
router.get('/postId/:id',getPostById)
router.get('/getAll',getAllPost)

module.exports = router;