var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NewRecommendation = new Schema(
    {    
         name:{type:String},
         subject:{type:String},
         recomand: {type: String},
         image:{type:String}
    }
);
module.exports = mongoose.model('NewRecommendation', NewRecommendation);