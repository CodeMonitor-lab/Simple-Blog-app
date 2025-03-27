const express = require('express');
const app = express();
const router = express.Router();
const {userSignup,userLogin,getAllUser} =require('../controllers/userController')
// validation
const {signupSchema,loginSchema} = require('../validator/auth-validator')
const validate = require('../middlewares/authValidatorMiddleware')

// routes
router.post('/signup',validate(signupSchema),userSignup)
router.post('/login',validate(loginSchema),userLogin);
router.get('/getUser',getAllUser)


module.exports = router;