const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should set firstName and lastName', () => {
  var userObject = {
    age: 22,
    location: 'São Paulo'
  };
  var res = utils.setName(userObject, "Wade Wilson");
  expect(res).toInclude({
    firstName: "Wade",
    lastName : "Wilson"
  }).toBeA('object');
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Wade'}).toEqual({name: 'Wade'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Wade',
//     age: 22,
//     location: 'São Paulo'
//   }).toExclude({
//     age: 23
//   });
// });
