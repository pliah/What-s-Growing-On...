const jwt = require('jsonwebtoken');

const Authorization = (req,res, next)=>{
   try{  
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token,'whats-growing-on-site');
    next();
   }catch(error){
       res.status(401).json({
           message:'Auth failed'
       })
   }
}
module.exports = Authorization;