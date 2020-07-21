const mongodb = require ('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017'

const dbName = 'taskManager'

MongoClient.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client)=>{

    if(error){
        return console.log('Unable to connect to the server!')
    }

    const db = client.db(dbName)
    //  db.collection('Users').insertOne({
    //      name: 'maximilian',
    //      age:1
    //  }, (error, result)=>{
    //      if(error){
    //          return console.log('Unable to insert the User')
    //      }

    //      console.log(result.ops)
    //  })

    // db.collection("users").insertMany([{
    //     name: 'adela',
    //     age: 25,
    //     email: "adelapaulo@gmail.com",
    //     password: "elgrande2020"
    // }, {
    //     name: " regina",
    //     age: 24,
    //     email: "reginapaul@gmail.com",
    //     password: "regking2020"
    // },{
    //     name: "frank zabron",
    //     age:23,
    //     email: "FRANKZABRON@gmail.com",
    //     password: 'zabron2020'

    // },{

    //     name: "merry",
    //     age: 24,
    //     email: 'merry2@gmail.com',
    //     password: " password123"
    // }], (error, result)=>{
    //     if(error){
    //          return console.log("Unable to insert users")
    //     }

    //     console.log (result.ops)
    // })

})