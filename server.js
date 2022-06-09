'use strict'

// require express and bodyParser
const express = require('express')
const bodyParser = require('body-parser')

// Import DB Connection
require('./config/db')

// Import API route
const routes = require('./api/routes/expenseRoutes')
const cors = require('cors') //importing route

// create express app
const app = express()

app.use(
    cors({
        origin: '*',
    })
)

// define port to run express app
const port = process.env.PORT || 3008

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Add endpoint
app.get('/', (req, res) => {
    res.send('Hello World')
})

routes(app)

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
