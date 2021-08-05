
var User = require('../models/users');
var mailService = require('../services/mailService')

exports.createNewUser = function(req, res, next){
    console.log("creat new user")
    var user = new User({
        id:req.body.id,
        fname:  req.body.fname,
        lname:  req.body.lname,
        email:  req.body.email,
        city:  req.body.city,
        neighborhood: req.body.neighborhood,
        street: req.body.street,
        number:  req.body.number,
        basket:  req.body.basket,
    });

    user.save(function (err){
        if(err) return next(err);
        res.send(user);
        console.log(user)
    })

}
/**
 *  This function sent email of the purchase details  
*/
exports.email = async function(req,res,next){
    try{
        await mailService.email(req.body);
        res.send('email sent')
    }catch(error){
       console.log("uttlikb");
    }
}
