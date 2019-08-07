require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d4749e3f3c0b83e98c7f604').then((task) => {
    console.log(task)
    return Task.countDocuments({completed : false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})