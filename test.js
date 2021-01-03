const nodemailer = require('nodemailer')
const email = {
    "host":"",
    "port":"",
    
    "auth":{
        "user":"",
        "pass":""
    }

};

const send = async(ontion)=>{
    nodemailer.createTransport(email)
}