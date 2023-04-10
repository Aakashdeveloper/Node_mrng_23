import { createClient } from 'redis';
import axios from 'axios';
import express from 'express';
let port = process.env.PORT || 9820;
let app = express();

const client = createClient(
    {
        host:'localhost',
        port:6379
    }
);

app.get('/data',async (req,res) => {
    const client = createClient(
        {
            host:'localhost',
            port:6379
        }
    );
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    let userInput = req.query.country.trim();
    let url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`;
    // check first in redis
    let result = await client.get(userInput);
    if(result){
        const output = JSON.parse(result)
        res.send(output)
    }else{
        let response = await axios.get(url)
        const out = response.data;
        await client.set(`${userInput}`,JSON.stringify({source:'Redis Cache',out}),{
            EX: 10,
            NX: true
          })
        res.send({source:'Api',out})
    }
    await client.disconnect();
})

app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})


