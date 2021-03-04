require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3333

const catchErrorMiddleware = require('./middleware/catchError')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(catchErrorMiddleware)
app.use('/picture', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(port, () => console.info('[INFO] Server is running...'))
