var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    console.log("DB conected ...")
    var oldData = {_id: 432,name:"Noori"}
    var newData = {$set:{name:"Reahmati",age:12}}
    dbo.collection("Blog").updateOne(oldData,newData ,(err,res)=>{
        if(err) throw err;
        console.log("DataBase Updated "+res)
        db.close()
    })
})