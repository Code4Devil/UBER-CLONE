const captainModel = require('../models/captian.model');

const captianService = require('../services/captian.service');
const {validationResult} = require('express-validator');

module.exports.registerCaptian = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;
        const { firstname, lastname } = fullname;


        const isCaptianExist = await captainModel.findOne({ email });
        if (isCaptianExist) {
            return res.status(400).json({ message: 'Captian already exists' });
        }

        // Hashing the password before saving
        const hashedPassword = await captainModel.hashPassword(password);

        // Registering the captain
        const captian = await captianService.register({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });


        const token = await captian.generateToken();
        res.status(201).json({ captian, token });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
}


module.exports.loginCaptian = async (req, res) => {
    try {
        const { email, password } = req.body;

        const captian = await captainModel.findOne({ email }).select('+password');
        if (!captian) {
            return res.status(400).json({ message: 'Captain not found' });
        }


        try {
            const isPasswordMatch = await captian.comparePassword(password);

            if (!isPasswordMatch) {
                return res.status(400).json({ message: 'Invalid username or password' });
            }

            const token = await captian.generateToken();
            res.cookie('token', token);
            res.status(200).json({ captian, token });
        } catch (error) {
            return res.status(500).json({ message: 'Error during authentication' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
}


module.exports.getCaptianProfile = async (req,res)=>{
    res.status(200).json({captian:req.captian});
}

module.exports.logoutCaptian = async (req,res)=>{
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    


    res.status(200).json({message:'Logged out successfully'});
}

