const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const APP_URL = process.env.APP_URL || 'http://localhost:5000'
const helmet = require('helmet')
const morgan = require('morgan')

const corsOptions = {
    origin: APP_URL,
    optionsSuccessStatus: 200
}

const app = express()

app.use(
    express.json(),
    cors(corsOptions),
    helmet(),
    morgan('dev')
)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = app