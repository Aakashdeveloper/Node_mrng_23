let express = require('express');
let app = express();
let port = 2239;

//default
app.get('/',(req,res)=>{
    res.send('Hiii From Express')
})

//category
app.get('/category',(req,res) => {
    res.send('This is category route')
})

//products
app.get('/products',(req,res) => {
    res.send('This is products route')
})

/// creating server with express
app.listen(port,(err) =>{
    if(err) throw err;
    else{
        console.log('Server is running on port '+port)
    }
})