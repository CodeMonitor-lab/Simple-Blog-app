const express = require('express');
const router = express.Router()
const {createPost,getAllPost,getPostById} = require('../controller/blogPostController');

router.post('/createPost',createPost)
router.get('/postId/:id',getPostById)
router.get('/posts',getAllPost)

module.exports = router;