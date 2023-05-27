const Express=require("express")
const Cors=require("cors")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const {loginModel}=require("./model/loginmodel")
const {otpmodel}=require("./model/otpmodel")
const nodemailer = require('nodemailer');
const app=Express()
//installing middlewares
app.use(Cors())
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))
//making mongodb connection
Mongoose.connect("mongodb+srv://Aswin:Add2023@cluster0.qrgymrt.mongodb.net/loginDB?retryWrites=true&w=majority",{useNewUrlParser:true})
// mongodb://localhost:27017



app.post('/api/newemail',async(req,res)=>{
    var data =new loginModel(req.body)
    console.log(data)
    const otpGenerator = require('otp-generator');
    var OTP=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: true });
    req.body.OTP=OTP
    data.save()
    sendConfirmationEmail(
    
        data.email,
        data.OTP
 )
    res.json({status:"Success"})
})
// app.post('/api/verifyOTP',async(req,res)=>{
//     var data =new otpmodel(req.body)
//     if(req.body.otp==OTP)
//     console.log(data)
    
//     sendConfirmationEmail(
//         data.email
//  )
//     res.json({status:"Success"})
// })


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'aswin0034@gmail.com',
		pass: 'ycyrwzgbeuwsyzze'
	}
});
const sendConfirmationEmail = (email,OTP ) => {

    console.log("Check");
   
    mailTransporter.sendMail({
      from: "aswin0034@gmail.com",
      to: email,
      subject: "Account Verified!",
      html: `<h1>Welcome!</h1>
          <h2>Hello</h2>
          <p> Enter the one-time password below</p>
          <p>password: ${OTP}</p>
          </div>`,
    }).catch(err => console.log(err));
  };

app.listen(1000,()=>{
    console.log('Server started')
})