const express = require('express');
const router = express.Router();
const {userSignup,userLogin,getAllUser,getUserById} =require('../controller/userController')
// validation
// const {signupSchema,loginSchema} = require('../validator/auth-validator')
// const validate = require('../middlewares/authValidatorMiddleware')

// routes
router.post('/signup',userSignup)
router.post('/login',userLogin);
router.get('/users',getAllUser)
router.get('/api/userId/:id',getUserById)


module.exports = router;