const request = require('supertest')
const app     = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name : 'Mike',
    email : 'mike@example.com',
    password : '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async() => {
    await request(app).post('/users').send({
        name : 'Wade Wilson',
        email : 'raj.alves96@gmail.com',
        password : 'MyPass@777!'
    }).expect(201)
})

test('Should login existing user', async() => {
    await request(app).post('/users/login').send({
        email : userOne.email,
        password : userOne.password
    }).expect(200)
})

test('Should not login nonexisting user', async() => {
    await request(app).post('/users/login').send({
        email : 'some@random.com',
        password : 'anythingRandom@123!'
    }).expect(400)
})