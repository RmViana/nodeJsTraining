const request = require('supertest')
const app     = require('../src/app')

test('Should signup a new user', async() => {
    await request(app).post('/users').send({
        name : 'Wade Wilson',
        email : 'raj.alves96@gmail.com',
        password : 'MyPass@777!'
    }).expect(201)
})