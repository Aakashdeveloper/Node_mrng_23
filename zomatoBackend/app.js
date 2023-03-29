let express = require('express');
let app = express();
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let dotenv = require('dotenv');
dotenv.config();
let mongoUrl = process.env.mongoUrl;
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.port ||3400;
let db;
let authKey = process.env.authKey

//middleware
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send('Health Ok')
})

//location
app.get('/location',(req,res) => {
    let key = req.header('x-basic-token')
    if(key == authKey){
        db.collection('location').find().toArray((err,data) => {
            res.status(200).send(data)
        })
    }else{
        res.status(201).send('Not Authenticated Call')
    }   
})


//db connection
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(`Erro while connecting to mongo`);
    db = client.db('internfeb');
    app.listen(port,() => {
        console.log(`Running on port ${port}`)
    })
})