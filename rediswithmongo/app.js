let express = require('express');
let redis = require('redis');
const mongo = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const port = process.env.PORT || 7600;
const app = express();
const client = redis.createClient({
    host:'localhost',
    port:6379
})

app.get('/data',(req,res) => {
    const userInput = (req.query.color).trim();
})

app.listen(port,(err)=>{
    console.log(`Server is running on port ${port}`)
})