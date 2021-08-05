
var Admin = require('../models/admin');
const jwt = require('jsonwebtoken')
/**
 *  This function returns all the admins registered on the site  
 */
exports.getAlladmins=function(req,res,next){
    Admin.find()
    .exec(function(err, list){
        if(err) return next(err);
        res.send(list);
    })  
}
/**
 *  This function saves new admin in the database 
 */
exports.creatNewAdmin=function(req,res,next){ 
  
    console.log("creat admin");
    var admin = new Admin({
        id:req.body.id,
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
    });
    admin.save(function (err){
        console.log(admin);
        if(err) return next(err);
        res.send(admin);
    }) 
}
/**
 * Once you login as an admin, you get a token 
 */
exports.login = function (req,res) {
    console.log("login");
    const {name,email, password} = req.body;
    Admin.find({name}).then((admins)=>{
    if(admins.length === 0){
        return res.status(401).json({ 
         message:'Auth failed'
       });
      } 
      const [admin] = admins;
      if(password===admin.password){
        const token = jwt.sign({
          id: admin._id,
          name: admin.name,
        },'whats-growing-on-site',{
          expiresIn: "1H"
        });
        return res.status(200).json({
          message: 'Auth successful',
          token: token
       })
      }
      res.status(401).json({
        message: 'Auth failed'
      }); 
    })
 }

