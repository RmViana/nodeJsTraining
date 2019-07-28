//CRUD create read update delete

// const mongodb     = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID    = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id : ObjectID('5d3a3923e31e93195086bc99')}, (error, result) => {
    //     if(error){
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({age : 22}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age : 22}).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({_id : new ObjectID('5d3a3a593ae17023b03f2247')}, (error, result) => {
        if(error){
            return console.log('Unable to fetch data!')
        }

        console.log(result)
    })

    db.collection('tasks').find({completed : false}).toArray((error, result) => {
        if(error){
            return console.log('Unable to fetch data!')
        }

        console.log(result)
    })


})

