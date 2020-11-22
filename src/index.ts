const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Set up express

const server = express()
server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 5000

server.listen(PORT, () =>
  console.log(`The server has started on port: ${PORT}`)
)

// set up mongoose

// set up routes
const userRouter = require('./routes/userRouter')

server.use('/api/users', userRouter)
