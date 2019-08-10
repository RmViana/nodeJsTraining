require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d4749e3f3c0b83e98c7f604').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

deleteTaskAndCount('5d47491e4ebc5b177c5e4390', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})