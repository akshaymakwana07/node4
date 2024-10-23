const mailer=require("nodemailer");

const transport = mailer.createTransport({
  service : "gmail",
  auth : {
    user : "akshaymakwana2739@gmail.com",
    pass : "tkycwhoukmpfldwm"
  }
})

module.exports.sendOtp=(to,otp)=>{
  let mailOption = {
    from : "akshaymakwana2739@gmail.com",
    to : to,
    subject : "Your OTP",
    text : `Your OTP is ${otp}`
  }

  transport.sendMail(mailOption,(err)=>{
    err && console.log(err);
  })
  
}