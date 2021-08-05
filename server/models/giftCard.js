var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GiftCard = new Schema(
    {  
         id:{type: String},
         title: {type: String},
         price: {type: String},
         image: {type: String},
         amount: {type: Number},
         description: {type: String},
    }
);
module.exports = mongoose.model('GiftCard', GiftCard);

