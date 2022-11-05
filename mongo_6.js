var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    //for assendeing sort 
    // var myObj = {name:1}
    //for reverse desending sort 
    var myObj = {name:-1}

    dbo.collection("Blog").find().sort(myObj).limit(2).toArray((err,result)=>{
        if(err)throw err;
        console.log(result)
        db.close()
    })
})