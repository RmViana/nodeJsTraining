const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app     = express()
const port    = process.env.PORT || 3000

app.use(express.json())

//Implemented: Async/ Await


//Create User
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()    
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

//Read all Users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}) 
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})


//Read specific User
app.get('/users/:id', async(req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})


//Create Task
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try{
        task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

//Read All Tasks
app.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
})


//Read specific Task
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})

//Start the server on the chosen port
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})