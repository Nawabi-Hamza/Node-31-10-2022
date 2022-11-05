var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    var dbo = db.db("MongoSecond")
    // var obj = require("./package.json")
    var obj =
    {
        _id:432,
        name:"Shafi",
        age:32
    }
    dbo.collection("Blog").insertOne(obj,(err,res)=>{
        console.log("User Added in Data Base")
        db.close()
    })
})