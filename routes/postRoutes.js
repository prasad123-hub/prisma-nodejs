const express = require('express')
const router = express.Router()

const {createPost, updatePost, deletePost, getPosts} = require('../controllers/postController')

// middleware for authentication
const isLoggedIn = require('../middlewares/isLoggedIn')

// Create a new post route
router.route('/post/create').post(isLoggedIn,createPost)

// update a post with post id
router.route('/post/update/:id').put(isLoggedIn,updatePost)

// delete a post with post id
router.route('/post/delete/:id').delete(isLoggedIn,deletePost)

// get all posts
router.route('/post/get').get(getPosts)

module.exports = router;