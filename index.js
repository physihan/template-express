const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const { connectDB } = require('./db')
// const bootService = require('./utils/bootService');
// bootService(app)
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)
app.use('/hello', (req, res) => {

    res.send('sasaassa');
})
connectDB().then(() => {
    app.listen(5000)
})