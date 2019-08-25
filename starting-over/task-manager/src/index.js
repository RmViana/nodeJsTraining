const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app     = express()
const port    = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')        
//     }else{
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const User = require('./models/user')
const Task = require('./models/task')

const main = async () => {
    // const task = await Task.findById('5d62f3d8f26d9911a0950acb')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5d62f1f41e871120b0b1f66c')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()