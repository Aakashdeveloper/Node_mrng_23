let express = require('express');
let categoryRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = process.env.MongoUrl;

function router(menu){

    //default route of category
    categoryRouter.route('/')
        .get((req,res) => {
            //res.send(categoryData)
            mongodb.connect(url,{useNewUrlParser:true},function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode');
                    dbObj.collection('category').find().toArray(function(err,data){
                        
                        if(err){
                            res.status(300).send('Error While Fetching')
                        }else{
                            res.render('category',{title:'Category Page',catData:data,menu})
                        }
                    })
                }
            })
        })

    // details route of category
    categoryRouter.route('/details')
        .get((req,res) => {
            res.send('Category Details')
        })
    
    return categoryRouter

}

module.exports = router;


