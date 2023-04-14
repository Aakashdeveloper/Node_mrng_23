let nodemailer = require('nodemailer');
let dotenv  = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ahanda205@gmail.com',
        pass:process.env.PASS
    }
})

let mailOption = {
    from:'ahanda205@gmail.com',
    to:'ahanda206@hotmail.com',
    subject:'Sending email using nodejs',
    text:'This is March batch'
}

transporter.sendMail(mailOption,(err,info)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Email sent: ${info.response}`);
    }
})