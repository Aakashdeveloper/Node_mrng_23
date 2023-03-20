const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const formidable = require('formidable');
const app = express();
const port = process.env.PORT || 8790;

//static file path
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res) => {
    res.render('index')
})


app.post('/upload',(req,res) => {
    console.log(JSON.stringify(req.body));
    let form = new formidable.IncomingForm();
    form.parse(req,function(err,field,files){
        let oldPath = files.image.filepath;
        let newPath = `${__dirname}/public/images/${files.image.originalFilename}`;
        fs.rename(oldPath,newPath,function(err){
            if(err) throw err;
            res.render('display',{title:field.imgName,image:files.image.originalFilename})
        })
    })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
});

