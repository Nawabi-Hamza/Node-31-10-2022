
var MongoClient = require("mongodb").MongoClient   
var url = "mongodb://localhost:27017/"
// var ObjectId = require("ObjectId")
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    console.log("DB conected ...")
    var DataDelete = {name:"BegiKhoda"}
    dbo.collection("Blog").deleteOne(DataDelete ,(err,res)=>{
        if(err) throw err;
        console.log("Data Deleted ")
        db.close()
    })
})