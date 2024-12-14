const express = require('express');
const router = express.Router();
const{body} = require('express-validator');
const captianController = require('../controllers/captian.controller');

router.post('/register',[
    body('fullname').notEmpty().withMessage('Full name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required'),
    body('vehicle.capacity').notEmpty().withMessage('Vehicle capacity is required'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required'),
    
],
captianController.registerCaptian
)

module.exports = router;
