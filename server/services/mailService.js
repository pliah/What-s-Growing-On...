var nodemailer = require('nodemailer');

exports.email = function(value){
    return new Promise((resolve,reject)=>{
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'pliah197@gmail.com',
            pass:'pliah1234'
        }
    });

    var mailOptions = {
        from:'pliah197@gmail.com',
        to: value.email,
        subject:'what growing On Site',
        text:'Hello' + value.name + value.message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
         reject(error)
        } else{
            console.log('sent email!')
            resolve('email sent')
        }
    })
 })
}