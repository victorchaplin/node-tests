const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {
    it('should add two numbers', () => {
        var result = utils.add(33, 11)
        expect(result).toBe(44).toBeA('number')
    })

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number')
            done()
        })
    })
    
    it('should square a number', () => {
        var result = utils.square(8)
        expect(result).toBe(64).toBeA('number')
    })
    
    it('should async square a number', (done) => {
        utils.asyncSquare(6, (square) => {
            expect(square).toBe(36).toBeA('number')
            done()
        })
    })
})

// should verify first and last name are set
// assert it includes first name and last with proper value
describe('Playground', () => {
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