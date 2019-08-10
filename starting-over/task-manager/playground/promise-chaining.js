require('../src/db/mongoose')
const User = require('../src/models/user')

//5d416188c1939211b8f5f5cf

// User.findByIdAndUpdate('5d4742b3e7c5ee045065dd24', {age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age : 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user  = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5d4742b3e7c5ee045065dd24', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})