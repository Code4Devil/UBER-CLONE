const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be at least 3 characters long']
        }

    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:{
            validator:function(v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message:'Invalid email address'
        }
    },

    password:{
        type:String,
        required:true,
        minlength:[6,'Password must be at least 6 characters long']
    },

    socketId:{
        type:String,
        default:null
    },

    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },

    vehicle:{
        color:{
            type:String,
            required:true
        },
        plate:{
            type:String,
            required:true
        },
       
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1']
        },

        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }

    },

    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }

    }


})

captainSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    const isMatch = await bcrypt.compare(password,this.password);
    return isMatch;
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);

module.exports = captainModel;
