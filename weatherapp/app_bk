let express = require('express');
let request = require('request');
let app = express();
let port = process.env.PORT || 8790;

app.use(express.static(__dirname+ '/public'))
app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/weather',(req,res) =>{
    let city = req.query.city?req.query.city:'Delhi'
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    // calling Url
    request(url,(err,apiResponse) => {
        if(err) throw err;
        const output = JSON.parse(apiResponse.body);
        res.render('index',{title:'Weather App',result:output});
    })
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`listing to port ${port}`)
})