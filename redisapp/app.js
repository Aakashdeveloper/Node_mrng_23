let express = require('express');
let axios = require('axios');
let redis = require('redis');
let port = process.env.PORT || 9800;
let app = express();
let client = redis.createClient({
    host:'localhost',
    port:6379
})

app.get('/data',(req,res) => {
    let userInput = req.query.country.trim();
    let url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`;
    // check first in redis
    return client.get(userInput,(err,result) => {
        // if data is in redis then return
        if(result){
            const output = JSON.parse(result)
            res.send(output)
        }else{
            // if data is not the part of redis than fetch from api
            axios.get(url)
            .then((response) => {
                //save in redis for next time
                const out = response.data;
                client.setex(`${userInput}`,3600,JSON.stringify({source:'Redis Cache',out}))
                // return response to api for first time
                res.send({source:'Api',out})
            })
        }
    })
})

app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})
