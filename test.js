const nodemailer = require('nodemailer')
const email = {
    "host":"",
    "port":"",
    "secure":"",
    "auth":{
        "user":"",
        "pass":""
    }

};

const send = async(ontion)=>{
    nodemailer.createTransport(email)
} 