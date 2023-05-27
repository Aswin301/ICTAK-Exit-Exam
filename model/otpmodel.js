const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema(
    {
        otp : {
            type : String,
            required : true
        }
        
    }
)

const loginModel = mongoose.model(
    "otpModel", otpSchema
)

module.exports = {loginModel}