const mongoose = require('mongoose');

const storeschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide your store name'],
        minlength:5,
        maxlength:50
    },
    address:{
        type:String,
        required:[true,'please provide your store address'],
        minlength:5,
        maxlength:50
    },
    usage:{
        type:String,
        required:[true,'please provide your store address'],
        minlength:5,
        maxlength:50
    },
    area:{
        type:Number
    },
    createdby:{
        type:String,
        required:[true,'please provide your ID'],
        minlength:5,
        maxlength:50
    }

})



module.exports = mongoose.model('store',storeschema);