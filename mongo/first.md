//////downloads
> https://www.mongodb.com/try/download/community
/////Signup
> https://www.mongodb.com/pt-br/cloud/atlas/register?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646494&adgroup=131761134692&cq_cmp=14412646494&gclid=CjwKCAiAmJGgBhAZEiwA1JZoltVMh_qyIyF4zz-_UAaekRNSvPE36PoYWwzhFr-JSxCcc2YS82ctEBoCLJkQAvD_BwE

/////Window/////
> open c drive and create folder by the name of data
> Inside data make folder by the name of db
> C:\data\db

////Mac/linux////
> open terminal
> sudo mkdir data/db


//////How to Start MongoDb Server/////
default Port> 27017
# window
> open cmd and go inside bin folder
(C:\ProgramFiles\Mongodb\Server\5.0.1\bin)
> mongod
(this will start mongodb server)
(do not close this cmd if you are using mongo in app)

# Mac/linux
> open terminal
> sudo mongod --dbpath data/db


//////How to Start MongoDb Client/////
(Testing query)
# Window
> open new cmd
> mongo

# Mac/linux
> open terminal
> mongo

/////////////////////////////////////////////////
SQL

| RollNo | Hindi | English | Computer|
|   1    |  80   |         |         |
|   2    |       |    70   |         |
|   3    |  85   |         |    90   |

MongoDb
[
    {
        RollNo:1,
        Hindi:80
    },
    {
        RollNo:2,
        English:70
    },
    {
        RollNo:3,
        Hindi:85,
        Computer:90
    }
]

//////////////////////
SQl         MongoDB
Database    Database
Table       Collections
Rows        Documents
Select      Find
Insert      Insert
Update      Update
Delete      Remove

C > Create
R > Read
U > Update
D > Delete


mongodb compass > UI Tool for mongo

/////
show dbs

///Go inside Database
use dbname

//to see collection
show collections

///Find
db.collection.find()

//Create database
use databasename

//////Insert
db.user.insert({"name":"Amit"})

db.user.insert({"name":"Nikita","city":"Paris"})