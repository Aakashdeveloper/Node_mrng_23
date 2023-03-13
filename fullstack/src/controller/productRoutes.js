let express = require('express');
let productRouter = express.Router();
let mongo = require('mongodb')
const mongodb = mongo.MongoClient;
const url = process.env.MongoUrl;

function router(menu){
    //default route of products
    productRouter.route('/')
        .get((req,res) => {
            mongodb.connect(url,{useNewUrlParser:true},function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode');
                    dbObj.collection('products').find().toArray(function(err,products){
                        if(err){
                            res.status(300).send('Error While Fetching')
                        }else{
                            res.render('product',{title:'Products Page',products,menu})
                        }
                    })
                }
            })
            // res.send(products)
        })


    productRouter.route('/category/:id')
        .get(function(req,res){
            const id = req.params.id
            mongodb.connect(url,{useNewUrlParser:true},function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode');
                    dbObj.collection('products').find({category_id:Number(id)}).toArray(function(err,products){
                        if(err){
                            res.status(300).send('Error While Fetching')
                        }else{
                            res.render('product',{title:'Products Page',products,menu})
                        }
                    })
                }
            })
        })


    // details route of Product
    productRouter.route('/details/:id')
        .get((req,res) => {
            let id = mongo.ObjectId(req.params.id);
            mongodb.connect(url,{useNewUrlParser:true},function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('marchnode');
                    dbObj.collection('products').find({_id:id}).toArray(function(err,products){
                        if(err){
                            res.status(300).send('Error While Fetching')
                        }else{
                            res.render('productDisplay',{title:'Products Detials Page',products,menu})
                        }
                    })
                }
            })
        })

    return productRouter

}

module.exports = router;