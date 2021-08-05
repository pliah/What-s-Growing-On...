
var Recommendation = require('../models/recommendation');
/**
 *  This function returns all the recommendations data  
*/
exports.getAllRecommendation=function(req,res,next){ 
    Recommendation.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })  
}
/**
 *  This function uploads a new recommendation  
*/
exports.createNewRec = function(req, res, next){
    console.log("creat new rec")
    var rec = new Recommendation({
        id:req.body.id,
        image: req.body.image,
        text:req.body.text,
    });
    rec.save(function (err){
        if(err) return next(err);
        res.send(rec);
    })
}
