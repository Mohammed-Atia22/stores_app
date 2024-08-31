const mongoose = require('mongoose');
const { type } = require('os');

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide your name'],
        minlength:5,
        maxlength:50
    },
    email:{
        type:String,
        required:[true,'please provide your email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please provide valid email'
        ],
        unique:true
    },
    password:{
        type:String,
        required:[true,'please provide your email password'],
        minlength:7
    }
})


module.exports = mongoose.model('user',userschema);