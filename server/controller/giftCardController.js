
var GiftCard = require('../models/giftCard');

/**
 *  This function returns all the giftcards data  
*/
exports.getAllGiftCard=function(req,res,next){ 
    GiftCard.find()
    .exec(function(err, list){
        console.log("GiftCard:", list)
        if(err) return next(err);
        res.send(list);
    })  
}
/**
 *  This function update the basket ny the item id  
*/
exports.addToBasketById=function(req,res,next){
    const id=req.params.id;
    console.log('id',id);
    GiftCard.findById(id)
    .exec(function(err, item){
        if(err) return next(err);
        res.send(item);
    })  
}
/**
 *  This function update the database, using the item's id
*/
exports.updateItemById = async function(req, res, next){
    try{
        console.log("gidt card updateItemById");
        const id=req.params.id;
        console.log("req.params.id",req.params.id);
        const giftcard = req.body;
        console.log("req.body",req.body);
        const update= await GiftCard.findOneAndUpdate({id:id},giftcard)
        res.send(update);
        console.log(res,update);
        }catch(error){
            console.log('error on addToBasketById ',error);
            return next(error)
        }
}
