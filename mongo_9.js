var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    console.log("DB conected ...")
    var oldData = {name:/^S/}

    var newData = {$set:{name:"BegiKhoda"}}

    dbo.collection("Blog").updateMany(oldData,newData ,(err,res)=>{
        if(err) throw err;
        console.log("DataBase Updated "+res)
        db.close()
    })
})