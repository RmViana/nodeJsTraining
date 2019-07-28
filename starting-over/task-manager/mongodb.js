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

    // db.collection('users').updateOne(
    //     { _id : new ObjectID('5d3a3643deb72f2e9074d5fa')}, 
    //     {
    //         $inc : {
    //             age : 1
    //         }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({completed : false},
        {
            $set : {
                completed : true
            }
        }).then((result) => {
            console.log(result.modifiedCount)
        }).catch((error) => {
            console.log(error)
        })

})

