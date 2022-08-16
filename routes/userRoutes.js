const express = require('express')
const router = express.Router()

const {signup, login, logout} = require('../controllers/userController')

// Singup route
router.route('/signup').post(signup)
// login route
router.route('/login').post(login)
// logout route
router.route('/logout').get(logout)


module.exports = router;