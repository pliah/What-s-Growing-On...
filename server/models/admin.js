var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Admin = new Schema(
    {  
         id:{type: Number},
         name: {type: String},
         email: {type: String}, 
         password: {type: String},
    }
);
module.exports = mongoose.model('Admin', Admin);

