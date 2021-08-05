var NewRec = require('../models/newRecommendation');
/**
 *  This function returns all the new recommendations 
*/
exports.getAllnewRec = function(req, res, next){
    console.log("new rec");
    NewRec  .find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
        console.log(list);
    })
}
/**
 *  This function delets new recommendations by the text
*/
exports.delete_newRec =async function(req, res, next){
    try{
    console.log('will delete ',req.params.text)
    const recomand=await NewRec.findOneAndDelete({recomand:req.params.text})
        res.send('delete');
        console.log(recomand);
    } catch(error){
        console.log('error on Delete ',error);
        return next(error)
    } 
    
}
/**
 *  This function uploads new recommendations
*/

exports.postNewRec = function(req, res, next){
    var newRec = new NewRec({
        name:req.body.name,
        subject: req.body.subject,
        recomand:req.body.recomand,
        image: req.body.pictures,
    });
    newRec.save(function (err){
        if(err) return next(err);
        res.send(newRec);
    })
}

