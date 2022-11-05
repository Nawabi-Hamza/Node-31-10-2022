var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db)=>{
    if(err)throw err;
    var dbo = db.db('MongoSecond')

    // var MyFilter = {name:"Hamza"}
    var MyFilter = {name:"Shafi"}
    var WhichToShow ={projection:{_id: 0 , name: 1, age: 1}}

    dbo.collection("Blog").find(MyFilter,WhichToShow).toArray((err,result)=>{
        if(err)throw err;
        console.log(result)
        db.close()
    })
})