const { Db } = require("mongodb")

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"
MongoClient.connect(url,(err,db)=>{
   var dbo = db.db("MongoSecond")
//    dbo.createCollection("Blog",(err,res)=>{
//     console.log("made it blog")
//     db.close()
//    })
var myobj = [
    { 
        name:"Aziz",
        title:"HomeWork",
        body:"I do my home wrok every day"
    },
    { 
        name:"Haseeb",
        title:"NOt work",
        body:"I do my home wrok every day"
    },
    { 
        name:"Sardar",
        title:"His work",
        body:"I do my home wrok every day"
    },
    { 
        name:"Noor",
        title:"Her WOrk",
        body:"I do my home wrok every day"
    }
]
    dbo.collection("Blog").insertMany(myobj,(err,res)=>{
        console.log("WELCOME")
        db.close()
    })
})
