var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
        user: 'yashkayasth1855@gmail.com',
        pass: '8160590780'
    }
});

const otpsend = (email, otp) => {
    let mailDetail = {
        to: email,
        subject: "OTP for new password",
        html: "<h3>OTP for new  is</h3>" + "<h1 style='font-weight:bold;'>" + otp +"</h1>"
    }
    let mailSending = transporter.sendMail(mailDetail, function(error, info){
        if (error) {
            console.log(error);
        }else{
            console.log(' Email sent: '+ info.response);
        }
    })
    return mailSending;
};

module.exports = { otpsend };