const express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
})

app.get('/users', (req, res) => {
    res.send([{
        name: 'Victor',
        age: 35
    }, {
        name: 'Carol',
        age: 36
    }, {
        name: 'Helen',
        age: 14
    }])
})

app.listen(3000)

module.exports.app = app