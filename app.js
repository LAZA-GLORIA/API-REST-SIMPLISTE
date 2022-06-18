require('babel-register')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

/*app.use((req, res, next) => {
    console.log(`URL : ${req.url}`)
    next()
})

app.get('/api', (req, res) => {
    res.send('Root API')
})

app.get('/api/v1', (req, res) => {
    res.send('API V1')
})

app.get('/api/books/:id', (req, res) => {
    res.send(req.params)
})
*/

const members = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Toto'
    },
    {
        id: 2,
        name: 'Lili'
    },
]

app.get('api/v1/members/:id', (req, res) => {
    
})
console.log(members[0])

app.listen(3000, () => {
    console.log('Started on port 3000')
})