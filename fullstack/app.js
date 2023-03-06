let express = require('express');
let app = express();
let port = 2239;

let categoryRouter = require('./src/controller/categoryRoutes');
let productRouter = require('./src/controller/productRoutes');

//static file path
app.use(express.static(__dirname+'/public'));
//html file path
app.set('views','./src/views');
// view engine
app.set('view engine','ejs')

//default
app.get('/',(req,res)=>{
    // res.send('Hiii From Express')
    res.render('index',{title:'Home Page'})
});


app.use('/category',categoryRouter);
app.use('/products',productRouter);

/// creating server with express
app.listen(port,(err) =>{
    if(err) throw err;
    else{
        console.log('Server is running on port '+port)
    }
});