
var MongoClient = require("mongodb").MongoClient   
var url = "mongodb://localhost:27017/"
// var ObjectId = require("ObjectId")
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    console.log("DB conected ...")
    var oldData = {name:"Hamza"}

    var newData = {$set:{name:"Hamza"}}
    dbo.collection("Blog").updateOne(oldData,newData ,(err,res)=>{
        if(err) throw err;
        console.log("DataBase Updated "+res)
        db.close()
    })
})