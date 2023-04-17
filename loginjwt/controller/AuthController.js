const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/userSchema');

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())

//get all users
router.get('/users',(req,res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//register user
router.post('/register',(req,res) => {
    //encrypt Password
    let hashpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User',
    },(err,data) => {
        if(err) res.status(500).send('Error While Register')
        res.status(200).send('Register Successfull')
    })
})

//login user
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) res.send({auth:false,token:'Error While login'})
        if(!user) res.send({auth:false,token:'No User found register first'})
        else{
            const passIsValid =bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) res.send({auth:false,token:'Invalid Password'})
            // in case both valid
            let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400})
            res.send({auth:true,token:token})
        }
    })
})


//userinfo
router.get('/userInfo',(req,res) => {
    let token = req.headers['x-access-token'];
    if(!token ) res.send({auth:false,token:'No Token Provided'})
    //jwt verify
    jwt.verify(token,config.secret,(err,user) => {
        if(err) res.send({auth:false,token:'Invalid Token Provided'})
        User.findById(user.id,{password:0},(err,result) => {
            res.send(result)
        })
    })
})


module.exports = router