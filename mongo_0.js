// for mongo in node js first install (npm install mongodb)
var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017"
MongoClient.connect(url,(err,db)=>{
    var dbo = db.db("MongoSecond")
    var obj = [
        {
            name:"Hamza",
            lname:"nawabi",
            age:20,
            phone:"0783234234",
            firends:[
                {name:"Sardar",age:19},
                {name:"Yasin",age:21},
                {name:"Ansar",age:21}
            ],
            hobies:["Game","Codeing","Swiming"]
        },
        {
            name:"Shafi",
            lname:"Ahmadi",
            age:19,
            phone:"0763524324"
        }
    ]
    dbo.collection("Blog").insertMany(obj,(err,res)=>{
        console.log("Data inserted ...")
        db.close()
    })
})