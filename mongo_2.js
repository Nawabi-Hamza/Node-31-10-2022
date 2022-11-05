var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    dbo.collection('Blog').findOne({name:"Hamza"},(err,result)=>{
        if(err) throw err;
        // console.log("User Added in Data Base")
        console.log(result)
        db.close()
    })
})