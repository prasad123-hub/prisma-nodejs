const cookieParser = require('cookie-parser')
const express = require('express')

// dotenv is a module that loads environment variables from a .env file into process.env
require('dotenv').config()


// create an express app
const app = express()

// regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookie middleware
app.use(cookieParser())


// routes
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

// router middleware
app.use('/api', userRouter)
app.use('/api', postRouter)

// test route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000,() => {
    console.log('server is running on port 3000')
})
