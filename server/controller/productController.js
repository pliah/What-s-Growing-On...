
var Product = require('../models/product');
/**
 *  This function returns all the products data  
*/
exports.getAllProduct=function(req,res,next){
    console.log('getAllProduct'); 
    Product.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })  
}
/**
 *  This function update the database, using the item's id
*/
exports.updateItemById = async function(req, res, next){
    debugger;
    try{
        console.log("updateItemById");
        const id=req.params.id;
        console.log("req.params.id",req.params.id);
        const product = req.body;
        console.log("req.body",req.body);
        const update= await Product.findOneAndUpdate({id:id},product)
        res.send(update);
        console.log(res,update);
        }catch(error){
            console.log('error on UPDATEToBasketById ',error);
            return next(error)
        }
}






