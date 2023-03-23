const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 8790;

//static files
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

//middleware
app.use(bodyParser.json({}))
app.use(fileUpload())

app.get('/',(req,res) => {
    res.render('index')
})

app.post('/upload',(req,res) => {
    console.log(req.files)
    console.log(req.body);
    const imageFile = req.files.image;
    imageFile.mv(`${__dirname}/public/images/${imageFile.name}`,(err,data) => {
        if(err) throw err;
        res.render('display',{title:req.body.imgName,image:`${imageFile.name}`})
    })
})


app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})