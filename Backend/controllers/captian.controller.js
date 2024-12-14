const captainModel = require('../models/captian.model');

const captianService = require('../services/captian.service');
const {validationResult} = require('express-validator');

module.exports.registerCaptian = async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;

    const {firstname,lastname} = fullname;

    const isCaptianExist = await captainModel.findOne({email});
    
    if(isCaptianExist){
        return res.status(400).json({message:'Captian already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captian = await captianService.register({
        firstname,
        lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType,
    })

    const token = await captian.generateToken();

    res.status(201).json({captian,token});

}

