const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
    var result = utils.add(33, 11)
    expect(result).toBe(44).toBeA('number')
})

it('should square a number', () => {
    var result = utils.square(8)
    expect(result).toBe(64).toBeA('number')
})

// should verify first and last name are set
// assert it includes first name and last with proper value
it('should verify first and last names', () => {
    var victor = utils.setName({
        age: 35,
        location: 'Porto Alegre'
    }, 'Victor Chaplin')
    expect(victor).toInclude({
        firstName: 'Victor',
        lastName: 'Chaplin'
    })

})

// it('should expect some values', () => {
//     // expect(12).toNotBe(11)
//     // expect({name: 'Victor'}).toEqual({name: 'Victor'})
//     // expect([2, 3, 4]).toExclude(1)
//     expect({
//         name: 'Victor',
//         age: 35,
//         location: 'Porto Alegre'
//     }).toExclude({
//         age:34
//     })
// })