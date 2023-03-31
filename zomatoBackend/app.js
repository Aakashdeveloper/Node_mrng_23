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


//restaurants
app.get('/restaurants',(req,res) => {
    let query = {};
    let stateId = Number(req.query.stateId);
    let mealId = Number(req.query.mealId);

    if(stateId && mealId){
        query = {state_id:stateId,"mealTypes.mealtype_id":mealId}
    }
    else if(stateId){
        query = {state_id:stateId}
    }
    else if(mealId){
        query = {"mealTypes.mealtype_id":mealId}
    }
    
    db.collection('restaurants').find(query).toArray((err,data) =>{
        if(err) throw err;
        res.send(data)
    })
})

//filters
app.get('/filter/:mealId',(req,res) => {
    let query = {}
    let sort = {cost:1}
    let skip = 0;
    let limit = 10000000
    let cuisineId = Number(req.query.cuisineId);
    let mealId = Number(req.params.mealId);
    let lcost =  Number(req.query.lcost);
    let hcost =  Number(req.query.hcost);

    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip);
        limit = Number(req.query.limit);
    }

    if(req.query.sort){
        sort={cost:req.query.sort}
    }

    if(lcost && hcost){
        query = {
                "mealTypes.mealtype_id":mealId,
                $and:[{cost:{$gt:lcost,$lt:hcost}}]
            }
    }
    else if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId}
    }

    db.collection('restaurants').find(query).sort(sort).skip(skip).limit(limit).toArray((err,data) =>{
        if(err) throw err;
        res.send(data)
    })
})

app.get('/mealType',(req,res) => {
    db.collection('mealType').find().toArray((err,data) => {
        res.status(200).send(data)
    })
})

//details
app.get('/details/:id',(req,res) => {
    //let id = Number(req.params.id);
    let _id = mongo.ObjectId(req.params.id)
    db.collection('restaurants').find({_id:_id}).toArray((err,data) =>{
        if(err) throw err;
        res.send(data)
    })
})

//menu
app.get('/menu/:id',(req,res) => {
    let id = Number(req.params.id);
    db.collection('menu').find({restaurant_id:id}).toArray((err,data) =>{
        if(err) throw err;
        res.send(data)
    })
})


//order
app.get('/orders',(req,res) => {
    let query = {}
    let email = req.query.email
    if(email){
        query = {email:req.query.email}
    }
    db.collection('orders').find(query).toArray((err,data) =>{
        if(err) throw err;
        res.send(data)
    })
})

//db connection
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(`Erro while connecting to mongo`);
    db = client.db('internfeb');
    app.listen(port,() => {
        console.log(`Running on port ${port}`)
    })
})