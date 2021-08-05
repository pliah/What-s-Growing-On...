var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema(
    {  
         id:{type: String},
         title: {type: String},
         price: {type: String},
         image: {type: String},
         amount: {type: Number},
         description: {type: String},
    }
);

module.exports = mongoose.model('Product', Product);