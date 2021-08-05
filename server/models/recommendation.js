var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Recommendation = new Schema(
    {  
         id:{type: String},
         image: {type:String},
         text: {type: String},
    }
);

module.exports = mongoose.model('Recommendation', Recommendation);