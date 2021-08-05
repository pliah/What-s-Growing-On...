var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema(
    {    
        fname: {type: String},
        lname: {type: String},
        email: {type: String},
        city: {type: String},
        neighborhood:{type: String},
        street:{type: String},
        number: {type: String},
        basket: {type: Array},
        id: {type:Number}
    }
);

module.exports = mongoose.model('User', User);