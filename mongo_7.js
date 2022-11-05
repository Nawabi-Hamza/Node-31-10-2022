var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
var http = require("http")
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')


    dbo.collection("Blog").find().limit(5).toArray((err,result)=>{
        if(err)throw err;
        http.createServer((err,res)=>{
            res.writeHead(200,{"content-type":"Application/json"})
            res.end(JSON.stringify(result))
        }).listen(3030,()=>{console.log("check the browser")})
        db.close()
    })
})