const express = require('express');
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware');

const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),

    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),

],

   userController.registerUser

)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],

   userController.loginUser

)

router.get('/profile',authMiddleware.authenticate,userController.getUserProfile);
router.get('/logout',authMiddleware.authenticate,userController.logoutUser);

module.exports = router;
