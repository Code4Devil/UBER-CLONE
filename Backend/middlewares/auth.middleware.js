const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklisttoken.model');
const captianModel = require('../models/captian.model');

module.exports.authenticate = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token});
    if(isBlacklisted){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();

    }
    catch(err){
        return res.status(401).json({
            message:'Unauthorized'
        })

    }
}

module.exports.authenticateCaptian = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log(token);

    if(!token){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }   

    const isBlacklisted = await blacklistTokenModel.findOne({token});
    if(isBlacklisted){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captian = await captianModel.findById(decoded._id);
        req.captian = captian;
        return next();
    }
    catch(err){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }
}

