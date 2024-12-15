const captianModel = require('../models/captian.model');

module.exports.register = async ({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
})=>{
    if(!firstname|| !email || !password  || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }

    const captian = await captianModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captian;

}
