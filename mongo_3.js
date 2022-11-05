var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')
    // dbo.collection('Blog').find({},{projection:{_id: 0}}).toArray((err,result)=>{
    // dbo.collection('Blog').find({},{projection:{_id: 0 , name: 1 , age: 1}}).toArray((err,result)=>{
    dbo.collection('Blog').find({},{projection:{_id: 0 , name: 1}}).toArray((err,result)=>{
        if(err) throw err;
        // console.log(result[0].firends[0])
        // console.log(result[0].firends[0].name)
        console.log(result)
        db.close()
    })
})