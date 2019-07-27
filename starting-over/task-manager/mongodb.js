//CRUD create read update delete

// const mongodb     = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID    = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id  : id,
    //     name : 'Domino',
    //     age  : 27
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Jessie',
    //         age : 21
    //     },
    //     {
    //         name : 'Júlio',
    //         age : 22
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Finish Agatha Chritie\'s book',
    //         completed : false
    //     },
    //     {
    //         description : 'Learn a bit about Git and Github',
    //         completed : true
    //     },
    //     {
    //         description : 'To watch Endgame',
    //         completed : true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

})

